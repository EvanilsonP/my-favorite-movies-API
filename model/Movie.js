const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MovieSchema = new Schema({

    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
    
});

module.exports = mongoose.model('movies', MovieSchema);