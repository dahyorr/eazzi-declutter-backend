const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseIncrement = require('mongoose-increment');
const increment = mongooseIncrement(mongoose);

const OrderSchema = new Schema({
    name: {type: String, required: true},
    time: {type: Date, default:Date.now()},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    deliveryMethod: {type: String, enum: ['homeDelivery', 'pickUp'], required: true},
    state: {type: String, required: true},
    email: {type: String, required: true},
    items: [{
        product: {
            id: {type: Schema.Types.ObjectId, required: true, ref: 'Product'},
            title: {type: String, required: true, max: 55},
            imgUrl: {type: String, required: true},
            price: {type: Number, required: true},
            category: {type: String, required: true},
            location: {type: String, required: true},
        },
        quantity: {type: Number, required:true}
    }],
    totalPrice: {type: Number, required: true},
    status: {type: String, default:'pending', enum:['completed', 'pending', 'awaitingDelivery', 'cancelled']},
    shippingFee: {type: Number, required: false}
})

OrderSchema.plugin(increment, {
    modelName: 'Order',
    fieldName: 'id',
    type: Number,
    start: 0,
    increment: 1,
});

module.exports = mongoose.model('Order', OrderSchema)