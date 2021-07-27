const express = require('express')
const authRoutes = require('./auth')
const categoryRoutes = require('./category')
const productRoutes = require('./product')
const orderRoutes = require('./order')
const whatsapp  = require('../helpers/whatsapp')
module.exports = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/category', categoryRoutes)
    app.use('/api/products', productRoutes)
    app.use('/api/orders', orderRoutes)
    app.use('/api/test', (req, res, next) =>{
        whatsapp.sendTestMessage()
        res.status(200).json({message:"done"})
    })
    if(process.env.NODE_ENV === 'production'){
        // serve up production assets
        app.use(express.static('client/build'))
        //serve up index.html
        const path = require('path')
        app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'client','build', 'index.html')))
    }
}