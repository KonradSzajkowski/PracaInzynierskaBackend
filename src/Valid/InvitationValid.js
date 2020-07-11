const Joi = require('@hapi/joi')

module.exports = (data)=>{
    return Joi.object({
        login:Joi.string().required(),
        companyId:Joi.string().required()
    }).validate(data)
}