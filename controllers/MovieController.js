const Movie = require('../model/Movie.js');

const welcome = (req, res) => {
    res.send('Welcome');
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
    res.send(movie);
};


module.exports = { welcome, Createmovie };