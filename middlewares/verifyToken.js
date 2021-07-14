const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

module.exports = (req, res, next) => {
    console.log(req.headers)
    let token = req.headers.authorization
    if(!token){
        return res.status(403).json({ message: "No Token Provided"})
    }
    token = token.split(' ')[1]
    jwt.verify(token, JWT_SECRET, (err, result) =>{
        if(err){
            return res.status(401).json({ message: "Unauthorized!" });
        }
        req.user = result
        next()
    })
}