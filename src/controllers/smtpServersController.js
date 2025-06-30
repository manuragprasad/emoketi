const model = require('../models/smtpServersModel');

exports.getAll = async (req, res) => {
  try {
    const servers = await model.findAll();
    res.json(servers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newServer = await model.create(req.body);
    res.status(201).json(newServer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
