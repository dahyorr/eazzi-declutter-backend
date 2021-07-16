require('dotenv').config()
const production  = 'https://benefique-choucroute-07068.herokuapp.com';
// const development = 'http://localhost:5000';
module.exports = {
    PORT:  process.env.PORT,
    // HOST: process.env.HOST,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    // URL: (process.env.NODE_ENV ? production : development),
    BACKEND_URL: (production),
}