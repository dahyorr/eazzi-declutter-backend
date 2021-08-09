const Order = require('../models/Order')
const Product = require('../models/Product')
const {sendOrderNotification} = require('../helpers/whatsapp')
const {sendOrderInTransitMail, sendOrderReceiptMail} = require('../helpers/mailer')

module.exports = {
    createOrder: async (req, res) =>{
        const {name, phone, address, state, email, items, deliveryMethod, totalPrice} = req.body
        const order = new Order({
            name, phone, address, state, email, items, deliveryMethod, totalPrice
        })
        items.forEach(item => {
            Product.findOne({_id:item.product.id})
                .then(product => {
                    product.stock = product.stock - item.quantity
                    product.save()
                })
                .catch(e => console.log(e))
        })
        await order.save()
        sendOrderNotification(order)
        res.status(201).json({message: "Order saved successfully"})
    },

    fetchOrders: async (req, res) =>{
        const orders = (await Order.find()).reverse()
        //     .populate({
        //     path: "items.product"
        // })
        res.status(200).json({orders})
    },

    fetchOrder: async (req, res) =>{
        const {orderId} = req.params
        const order = await Order.findOne({id: orderId})
        if(!order) return res.status(404).json({message: 'No Order found'})
        res.status(200).json({order})
    },

    changeStatus: async (req, res) =>{
        const {orderId} = req.params
        const {status} = req.body
        const order = await Order.findOne({id: orderId})
        if (order){
            order.status = status
            await order.save()
            if(status === 'awaitingDelivery') await sendOrderInTransitMail(order)
            if(status === 'cancelled') {
                order.items.forEach(item =>  {
                    Product.findOne({_id:item.product._id})
                        .then(product =>{
                            product.stock += item.quantity
                            return product.save()
                        })
                } )
            }
            return res.status(204).json({message: 'Order status changed successfully'})
        }
        else return res.status(404).json({message: "Order not found"})
    },

    addShippingFee: async (req, res) =>{
        const {orderId} = req.params
        const {shippingFee} = req.body
        const order = await Order.findOne({id: orderId})
        order.shippingFee = shippingFee
        order.save()
            .then(res => sendOrderReceiptMail(order))
        return res.status(204).json({message: 'Order saved successfully'})
    }
}