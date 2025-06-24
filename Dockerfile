# === Stage 1: Install dependencies ===
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json ./            # only package.json, not package-lock.json
RUN npm install --production    # install from package.json

# === Stage 2: Build & Run ===
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# 3) Run
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
