const Movie = require('../model/Movie.js');


const homePage = async (req, res) => {
    res.status(200).json({ message: "Welcome to the home page. Feel free to explore the features this API provides you."})
};

const allMovies = async (req, res) => {

    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
};

// Function to save a movie to the database
const Createmovie = async(req, res) => {

    const movie = await new Movie({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    movie.save();
    return res.send(movie);
};

// Function to delete a movie from the database
const deleteMovie = async (req, res) => {

    const movie = await Movie.findByIdAndDelete(req.params.id);
    return res.send(movie);
};

// Function to update a movie
const updateMovie = async (req, res) => {

    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    return res.send(movie);
};


module.exports = { allMovies, Createmovie, deleteMovie, updateMovie, homePage };