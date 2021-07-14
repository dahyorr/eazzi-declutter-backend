const Category = require('../models/Category')

module.exports = {
    createCategory: async (req, res) =>{
        const {value, label, iconName} = req.body
        const category = new Category({
            value, label, iconName
        })
        await category.save()
        res.status(200).json({message: "Category saved successfully"})
    },

    fetchCategories: async (req, res) =>{
        const categories = await Category.find()
        res.status(200).json({categories })
    },

    fetchCategory: async (req, res) =>{
        const {categoryId} = req.params
        const category = await Category.findOne({_id: categoryId})
        if(!category) return res.status(404).json({message: 'No product found'})
        res.status(200).json({category})
    },

}