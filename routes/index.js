const express = require('express');
const router = express.Router();
const controller = require('../controllers/MovieController.js');
const checkRequiredFields = require('../middleware/checkRequiredFields');
const movieValidation = require('../middleware/validateMovie.js');

// Routes
router.get('/', controller.homePage);
router.get('/allMovies', controller.allMovies);
router.get('/movie/:id', controller.movieByID);

router.post('/create', checkRequiredFields, movieValidation, controller.Createmovie);
router.delete('/:id', controller.deleteMovie);
router.put('/:id', controller.updateMovie);

module.exports = router;