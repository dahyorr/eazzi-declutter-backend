const express = require('express')
const authRoutes = require('./auth')
const categoryRoutes = require('./category')
const productRoutes = require('./product')
module.exports = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/category', categoryRoutes)
    app.use('/api/products', productRoutes)
    if(process.env.NODE_ENV === 'production'){
        // serve up production assets
        app.use(express.static('client/build'))
        //serve up index.html
        const path = require('path')
        app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'client','build', 'index.html')))
    }
}