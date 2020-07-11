const Joi = require('@hapi/joi')

module.exports = (data) => {
    return Joi.object({
        name:Joi.string().max(100)
    }).validate(data)
}