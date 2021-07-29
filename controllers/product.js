const Product = require('../models/Product')

module.exports = {
    createProduct: async (req, res) =>{
        const {title, imgUrl, price, category, location, status} = req.body
        const product = new Product({
            title, imgUrl, price, category, location, status: status || 'Ongoing'
        })
        await product.save()
        res.status(200).json({message: "Product saved successfully"})
    },

    fetchProducts: async (req, res) =>{
        const {query} = req
        if (query.category) query.category = {$in: [query.category]}
        const products = await Product.find(query)
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