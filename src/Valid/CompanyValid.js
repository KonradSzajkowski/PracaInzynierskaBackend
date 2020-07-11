const Joi = require('@hapi/joi')

module.exports = (data) =>{
    return Joi.object({
        name:Joi.string().max(50).required(),
        post:Joi.string().pattern(/^\d{2}-\d{3}$/).max(6).required(),
        postName:Joi.string().max(50).required(),
        adres:Joi.string().max(50).required(),
        nip:Joi.string().pattern(/^\d{10}$/).required(),
        kpir:Joi.boolean()
    }).validate(data)
}