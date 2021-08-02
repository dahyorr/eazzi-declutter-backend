const Product = require('../models/Product')

module.exports = {
    createProduct: async (req, res) =>{
        if (!req.file) return res.status(422).json({message: "Please Provide a product image"})
        const {title, imgUrl, price, category, location, description, stock} = req.body
        console.log(req.body)
        console.log(imgUrl)
        const product = new Product({
            title, imgUrl, price, category, location, description, stock,
        })
        await product.save()
        res.status(200).json({message: "Product saved successfully"})
    },

    fetchProducts: async (req, res) =>{
        const {query} = req
        let queryCheck = {}
        if (query.category) queryCheck = {category: query.category}
        const products = await Product.find(queryCheck)
        res.status(200).json({products})
    },

    searchProducts: async (req, res) =>{
        const {search} = req.body
        console.log(search)
        const products = await Product.find(
            // {$text: {$search: search}},
            {"title": { "$regex": search, "$options": "i" }}
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