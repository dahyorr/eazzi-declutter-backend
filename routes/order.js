const express = require('express');
const orderController = require('../controllers/order');
const routes =  express.Router()


routes.post(
    '/',
    // validateBody(loginSchema),
    orderController.createOrder
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