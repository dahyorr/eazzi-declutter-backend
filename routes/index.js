const authRoutes = require('./auth')
const categoryRoutes = require('./category')
const productRoutes = require('./product')
module.exports = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/category', categoryRoutes)
    app.use('/api/products', productRoutes)
}