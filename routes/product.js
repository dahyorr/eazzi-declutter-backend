const express = require('express');
const productController = require('../controllers/product');
const routes =  express.Router()


routes.post(
    '/',
    // validateBody(loginSchema),
    productController.createProduct
)
routes.get(
    '/',
    // validateBody(registerSchema),
    productController.fetchProducts
)
routes.get(
    '/:productId',
    // validateBody(registerSchema),
    productController.fetchProduct
)

module.exports = routes