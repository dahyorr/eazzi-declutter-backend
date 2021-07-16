module.exports = function errorHandler ( err, req, res, next ) {
    const status = err.statusCode || 500;
    let message = "Ops!. Something went south.";
    console.log(err)
    return res.status(status).json({message});
};