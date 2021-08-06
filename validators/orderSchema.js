const Joi = require('joi')
module.exports = {
    ChangeStatus: Joi.object({
        status: Joi.string().valid('completed', 'pending', 'awaitingDelivery', 'cancelled').required(),
    }),
    // UpdateDepartment: Joi.object({
    //     name: Joi.string().required(),
    //     shortName: Joi.string().max(5).required(),
    // })
}