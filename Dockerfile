#################################
# Stage 1: install dependencies #
#################################
FROM node:18-alpine AS deps
WORKDIR /app
# copy only package.json (and lock if you have it)
COPY package.json ./
# install modules
RUN npm install --production

########################
# Stage 2: build step #
########################
FROM node:18-alpine AS builder
WORKDIR /app
# bring in node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# copy the rest of your source
COPY . .
# run your build (no-op if you have none)
RUN npm run build

##############################
# Stage 3: the final image  #
##############################
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# pull in everything from builder (code + built assets)
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
