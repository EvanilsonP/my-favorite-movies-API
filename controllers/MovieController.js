const Movie = require('../model/Movie.js');

const welcome = (req, res) => {
    res.send('Welcome');
};




module.exports = { welcome };