const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MovieSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image_url: {
        type: String,
        required: true
    },

    trailer_url: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('movies', MovieSchema);