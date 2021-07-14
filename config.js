require('dotenv').config()
module.exports = {
    PORT:  process.env.PORT,
    // HOST: process.env.HOST,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
}