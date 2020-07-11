const Joi = require('@hapi/joi')

module.exports = (data) => {
    return Joi.object({
        salesDate:Joi.date().required(),
        documentDate:Joi.date().required().min(new Date(data.salesDate)).max(new Date(new Date(data.salesDate).getFullYear(),new Date(data.salesDate).getMonth()+1,15)),
        document:Joi.string().max(50).required(),
        tax20:Joi.number().allow('', null),
        tax17:Joi.number().allow('', null),
        tax8_5:Joi.number().allow('', null),
        tax5_5:Joi.number().allow('', null),
        tax3:Joi.number().allow('', null),
        tax10:Joi.number().allow('', null),
        comments:Joi.string().max(255).allow('', null)
    }).validate(data)
}

