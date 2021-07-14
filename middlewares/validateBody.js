module.exports = Schema => (req, res, next) =>{
    const result = Schema.validate(req.body)
    if(result.error) return res.status(422).json({ message: result.error.message });
    next()
}