const express = require('express');
const orderController = require('../controllers/order');
const validateBody = require('../middlewares/validateBody')
const orderSchema = require('../validators/orderSchema')
const routes =  express.Router()


routes.post(
    '/',
    // validateBody(loginSchema),
    orderController.createOrder
)
routes.patch(
    '/status/:orderId',
    validateBody(orderSchema.ChangeStatus),
    orderController.changeStatus
)
routes.patch(
    '/shippingFee/:orderId',
    // validateBody(orderSchema.ChangeStatus),
    orderController.addShippingFee
)
routes.get(
    '/',
    // validateBody(registerSchema),
    orderController.fetchOrders
)

routes.get(
    '/:orderId',
    // validateBody(registerSchema),
    orderController.fetchOrder
)

module.exports = routes