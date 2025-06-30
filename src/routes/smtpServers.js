const express = require('express');
const router = express.Router();
const controller = require('../controllers/smtpServersController');

router.get('/', controller.getAll);
router.post('/', controller.create);
// TODO: add PUT, DELETE

module.exports = router;
