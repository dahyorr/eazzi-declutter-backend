const Order = require('../models/Order')
const {sendOrderNotification} = require('../helpers/whatsapp')

module.exports = {
    createOrder: async (req, res) =>{
        const {name, phone, address, state, email, items, deliveryMethod, totalPrice} = req.body
        console.log(req.body)
        const order = new Order({
            name, phone, address, state, email, items, deliveryMethod, totalPrice
        })
        await order.save()
        sendOrderNotification(order)
        res.status(201).json({message: "Order saved successfully"})
    },

    fetchOrders: async (req, res) =>{
        const orders = await Order.find()
        //     .populate({
        //     path: "items.product"
        // })
        res.status(200).json({orders})
    },

    fetchOrder: async (req, res) =>{
        const {orderId} = req.params
        const order = await Order.findOne({id: orderId}).populate({
            path: "items.product"
        })
        if(!order) return res.status(404).json({message: 'No Order found'})
        res.status(200).json({order})
    },

}