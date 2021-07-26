const Order = require('../models/Order')
const {sendOrderNotification} = require('../helpers/whatsapp')

module.exports = {
    createOrder: async (req, res) =>{
        const {name, phone, address, state, email, items, deliveryMethod} = req.body
        const order = new Order({
            name, phone, address, state, email, items, deliveryMethod
        })
        await order.save()
        sendOrderNotification(order)
        res.status(201).json({message: "Order saved successfully"})
    },

    fetchOrders: async (req, res) =>{
        const orders = await Order.find()
        res.status(200).json({orders })
    },

    fetchOrder: async (req, res) =>{
        const {orderId} = req.params
        const order = await Order.findOne({id: orderId})
        if(!order) return res.status(404).json({message: 'No Order found'})
        res.status(200).json({order})
    },

}