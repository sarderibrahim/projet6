module.exports = (req,res,next) => {
    const validEmail = (email) => {
        let emailRegexp = /^[A-Za-z0-9_.-]+[@]{1}[A-Za-z0-9_.-]+[.]{1}[a-z]{2,10}$/;
        let isRegexTrue = emailRegexp.text(email);
        isRegexTrue ? next() :res.status(400).json({message: 'mail non valide'});
    }
    validEmail(req.body.email);
}