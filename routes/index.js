const express = require('express');
const router = express.Router();
const controller = require('../controllers/MovieController.js');

// Routes
router.get('/', controller.allMovies);
router.post('/', controller.Createmovie);
router.delete('/:id', controller.deleteMovie);
router.put('/:id', controller.updateMovie);

module.exports = router;