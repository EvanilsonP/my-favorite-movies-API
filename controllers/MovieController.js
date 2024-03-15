const Movie = require('../model/Movie.js');


const homePage = async(req, res) => {

    try {
        res.status(200).json({ message: "Welcome to the home page. Feel free to explore the features this API provides you."})
    } 
    catch (error) {
        console.log(error);
    }
};

const allMovies = async (req, res) => {

    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } 
    catch (error) {
        console.log(error);
    }
};

const movieByID = async(req, res) => {

    const id = req.params.id;
    try {
        const movieID = await Movie.findByIdAndUpdate(id);
        return res.status(200).json(movieID);
    } 
    catch (error) {
        console.log(error);
    }
};

// Function to save a movie to the database
const Createmovie = async(req, res) => {

    try {
        const movie = await new Movie({
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url,
            trailer_url: req.body.trailer_url
        });
    
        movie.save();
        return res.status(201).json(movie);

    } 
    catch (error) {
        console.log(error);
    }
};

// Function to delete a movie from the database
const deleteMovie = async(req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findByIdAndDelete(id);
        return res.status(200).json('Movie deleted.');
    } 
    catch (error) {
        console.log(error);
    }
};

// Function to update a movie
const updateMovie = async(req, res) => {

    const id = req.params.id;
    try {
        const movie = await Movie.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url,
            trailer_url: req.body.trailer_url
             // Adicionando { new: true } para retornar o documento atualizado
        }, { new: true });
    
        return res.json(movie);
    } 
    catch (error) {
        console.log(error);
    }
};


module.exports = { homePage, allMovies, movieByID, Createmovie, deleteMovie, updateMovie };