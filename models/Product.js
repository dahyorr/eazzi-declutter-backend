const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title: {type: String, required: true, max: 53},
    imgUrl: {type: String, required: true},
    price: {type: Number, required: true},
    category: [{type: String, required: true}],
    dateCreated: {type: Date, default: Date.now()},
    location: {type: String, required: true},
    status: {type: String, default: 'Ongoing',  enum:['Ongoing', 'Completed'] },
})

module.exports = mongoose.model('Product', ProductSchema)