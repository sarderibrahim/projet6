const passwordSchema = require('../models/password');

module.exports = (req,res,next) => {
    if(!passwordSchema.validate(req.body.password)){
        res.status(400).json({ message: 'Le Mots de passe doit faire 10 caracteère au moins avec une majuscule,minuscule et un chiffre au moins'})
    } else {
        next();
    }
}