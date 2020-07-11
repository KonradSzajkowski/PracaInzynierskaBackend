const Joi = require('@hapi/joi')

const LoginValidationAdapter = (data) => {
    const schema = Joi.object({
        login: Joi.string().min(3).max(35).required(),
        password:Joi.string().required().pattern(/^[a-zA-Z0-9]{6,16}$/),
    });
    return schema.validate(data);
}

module.exports = LoginValidationAdapter