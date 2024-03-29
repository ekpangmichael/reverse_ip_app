const express = require('express');
const router = express.Router();
const ipController = require('../controllers/ipController');

router.get('/', ipController.reverseAndStoreIP);

module.exports = router;
