const express = require('express');
const categoryController = require('../controllers/category');
const routes =  express.Router()


routes.post(
    '/',
    // validateBody(loginSchema),
    categoryController.createCategory
)
routes.get(
    '/',
    // validateBody(registerSchema),
    categoryController.fetchCategories
)
routes.get(
    '/:categoryId',
    // validateBody(registerSchema),
    categoryController.fetchCategory
)

module.exports = routes