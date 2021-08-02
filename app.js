const {PORT, MONGO_URI} = require('./config')
const express = require('express')
const mongoose = require('mongoose')
require('express-async-errors')
const morgan = require('morgan');
const cors = require('cors')
const errorHandler = require('./helpers/errorHandler')

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
// app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*'
}))
app.use('/static', express.static('static'))
require('./routes/index')(app)
app.use(errorHandler)
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
    .then(() =>{
        app.listen(PORT)
        console.log('Connected to db')
        console.log(`Listening on port ${PORT}`)
    })
    .catch(e => console.log(e))

