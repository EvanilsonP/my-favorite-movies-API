const express = require('express');
const router = express.Router();
const controller = require('../controllers/MovieController.js');

const checkRequiredFields = require('../middleware/checkRequiredFields');
const movieValidation = require('../middleware/validateMovie.js');
const checkMovieExists = require('../middleware/checkMovieExists.js');

// Routes
router.get('/', controller.homePage);
router.get('/allMovies', controller.allMovies);
router.get('/movie/:id', checkMovieExists, controller.movieByID);

router.post('/create', checkRequiredFields, movieValidation, controller.Createmovie);
router.delete('/:id', checkMovieExists, controller.deleteMovie);
router.put('/:id', checkMovieExists, controller.updateMovie);

module.exports = router;