const express = require('express');
const router = express.Router();
const controller = require('../controllers/MovieController.js');

router.get('/', controller.welcome);

module.exports = router;