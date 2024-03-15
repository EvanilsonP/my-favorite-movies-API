const Joi = require('joi');

// Validates the movie fields
const movieValidation =  Joi.object({

    title: Joi.string().required(),
    description: Joi.string().max(250).required(),
    image_url: Joi.string().required(),
    trailer_url: Joi.string().required(),

});

module.exports = (req, res, next) => {
    const { error } = movieValidation.validate(req.body);

    if(error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};