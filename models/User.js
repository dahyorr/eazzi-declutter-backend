const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    dateCreated: {type: Date, default: Date.now()},
    password: {type: String, required: true},
})

module.exports = mongoose.model('User', UserSchema)