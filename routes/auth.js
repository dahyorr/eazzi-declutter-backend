const express = require('express');
const authController = require('../controllers/auth');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const routes = express.Router();

routes.post(
    '/login',
    // validateBody(loginSchema),
    authController.loginUser
)
routes.post(
    '/register',
    // validateBody(registerSchema),
    authController.register
)
routes.get(
    '/user',
    verifyToken,
    authController.user
)
routes.get(
    '/:token',
    authController.verifyToken
)
module.exports = routes