const Joi = require('joi')
module.exports = {
    CreateProduct: Joi.object({
        title: Joi.string().required(),
        imgUrl: Joi.string(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string(),
        // status: Joi.string(),
        stock: Joi.number().required(),
    }),
    // UpdateDepartment: Joi.object({
    //     name: Joi.string().required(),
    //     shortName: Joi.string().max(5).required(),
    // })
}