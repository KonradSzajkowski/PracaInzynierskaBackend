const Joi = require('@hapi/joi')

module.exports = (data) => {
    return Joi.object({
        id:Joi.string().max(40),
        name:Joi.string().max(100).required()
    }).validate(data)
}