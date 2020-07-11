const Joi = require('@hapi/joi')

module.exports = (data) => {
    return Joi.object({
        document:Joi.string().max(50).required(),
        date:Joi.date().required(),
        description:Joi.string().max(50).required(),
        contractorName:Joi.string().max(50).allow('', null),
        contractorPost:Joi.string().pattern(/^\d{2}-\d{3}$/).max(6).allow('', null),
        contractorPostName:Joi.string().max(50).allow('', null),
        contractorAdres:Joi.string().max(50).allow('', null),
        contractorNip:Joi.string().pattern(/^\d{10}$/).allow('', null),
        salesIncome:Joi.number().allow('', null),
        otherIncomes:Joi.number().allow('', null),
        materialsCosts:Joi.number().allow('', null),
        sideCosts:Joi.number().allow('', null),
        salaryCosts:Joi.number().allow('', null),
        otherCosts:Joi.number().allow('', null),
        other:Joi.number().allow('', null),
        researchDescription:Joi.string().max(50).allow('', null),
        researchValue:Joi.number().allow('', null),
        comments:Joi.string().max(255).allow('', null)
    }).validate(data)
}

