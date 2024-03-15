const Movie = require("../model/Movie");

const checkMovieExists = async(req, res, next) => {

    const movieId = req.params.id;
    try {
        const movie = await Movie.findById(movieId);
        if(!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        req.movie = movie;
        next();
    } 
    // If the user provides an id that does not exist the message below is triggered
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Please make sure the id you are providing is valid.' });
    }
};

module.exports = checkMovieExists;