const express = require('express');
const router = express.Router();
const controller = require('../controllers/MovieController.js');

// Routes
router.get('/', controller.welcome);
router.post('/', controller.Createmovie);

module.exports = router;