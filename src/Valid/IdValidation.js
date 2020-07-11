const Joi = require('@hapi/joi')

module.exports = (data) => {
    return Joi.object({
        id:Joi.string().max(40).required(),
    }).validate(data)
}