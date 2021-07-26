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
        product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
        quantity: {type: Number, required:true}
    }],
    status: {type: String, default:'pending', enum:['completed', 'pending', 'transit', 'pickup', 'failed', 'canceled']}
})

OrderSchema.plugin(increment, {
    modelName: 'Order',
    fieldName: 'id',
    type: Number,
    start: 0,
    increment: 1,
});

module.exports = mongoose.model('Order', OrderSchema)