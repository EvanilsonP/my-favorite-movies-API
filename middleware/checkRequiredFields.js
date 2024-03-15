// Checks if the user filled in all the fields
// Obs: You can place the if statement inside the create movie method if you do not wish to use a middleware
const checkRequiredFields = async(req, res, next) => {

    if(!req.body.title || !req.body.description || !req.body.image_url || !req.body.trailer_url) {
        return res.status(401).json({ message: "A field is missing."});
    }
    next();
}

module.exports = checkRequiredFields;