const fs = require('fs')
const path = require('path')
const Product = require('../models/Product')

module.exports = {
    createProduct: async (req, res) =>{
        if (!req.file) return res.status(422).json({message: "Please Provide a product image"})
        const {title, imgUrl, price, category, location, description, stock} = req.body
        const product = new Product({
            title, imgUrl, price, category, location, description, stock,
        })
        const savedProduct = await product.save()
        res.status(201).json({
            message: "Product saved successfully",
            productId: savedProduct._id
        })
    },

    updateProduct: async (req, res) =>{
        const{productId} = req.params
        if (!req.file) return res.status(422).json({message: "Please Provide a product image"})
        const {title, imgUrl, price, category, location, description, stock} = req.body
        const product = await Product.findOne({_id: productId})
        const fileLocation = path.join(__dirname, '..', product.imgUrl)
        if(product.imgUrl !== imgUrl) fs.unlinkSync(fileLocation)
        product.title = title
        product.imgUrl = imgUrl
        product.price = price
        product.category = category
        product.location = location
        product.description = description
        product.stock = stock
        const savedProduct = await product.save()
        res.status(204).json({
            message: "Product updated successfully",
            productId: savedProduct._id
        })
    },

    fetchProducts: async (req, res) =>{
        const {query} = req
        const queryCheck = {}
        queryCheck.stock = {$gt:0}
        if (query.category) queryCheck.category = query.category
        const products = await Product.find(queryCheck)
        res.status(200).json({products})
    },

    fetchProductsAdmin: async (req, res) =>{
        const {query} = req
        const queryCheck = {}
        const products = await Product.find(queryCheck)
        res.status(200).json({products})
    },

    searchProducts: async (req, res) =>{
        const {search} = req.body
        const products = await Product.find(
            // {$text: {$search: search}},
            {"title": { "$regex": search, "$options": "i" },stock:{$gt:0}}
        )
        res.status(200).json({products})
    },

    fetchProduct: async (req, res) =>{
        const {productId} = req.params
        const product = await Product.findOne({_id: productId})
        if(!product) return res.status(404).json({message: 'No product found'})
        res.status(200).json({product})
    },

}