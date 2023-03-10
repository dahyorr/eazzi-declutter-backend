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
    '/admin-login',
    // validateBody(loginSchema),
    authController.loginAdmin
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
    '/admin',
    verifyToken,
    isAdmin,
    authController.user
)
routes.get(
    '/verify/:token',
    authController.verifyToken
)
routes.get(
    '/users',
    authController.allUsers
)
module.exports = routes