import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('👋 Hello from Railway!');
});

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});