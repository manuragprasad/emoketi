require('dotenv').config();
const express = require('express');
const cors = require('cors');

const smtpRoutes = require('./routes/smtpServers');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/smtp-servers', smtpRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
