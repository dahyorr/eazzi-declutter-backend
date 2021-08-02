const express = require('express');
const productController = require('../controllers/product');
const productUpload = require('../middlewares/productUpload');
const routes =  express.Router()


routes.post(
    '/',
    // validateBody(loginSchema),
    productUpload.single('productImage'),
    productController.createProduct
)
routes.get(
    '/',
    // validateBody(registerSchema),
    productController.fetchProducts
    )
routes.post(
    '/search',
    // validateBody(registerSchema),
    productController.searchProducts
    )
routes.get(
    '/:productId',
    // validateBody(registerSchema),
    productController.fetchProduct
)

module.exports = routes