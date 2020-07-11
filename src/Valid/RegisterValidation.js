const Joi = require('@hapi/joi')

const RegisterValidationAdapter = (data) => {
    const schema = Joi.object({
        login: Joi.string().min(3).max(35).required(),
        password:Joi.string().required().pattern(/^[a-zA-Z0-9]{6,16}$/),
        repeat_password: Joi.ref("password"),
        name: Joi.string().max(50).required(),
        surname: Joi.string().max(50).required(),
    });
    return schema.validate(data);
}

module.exports = RegisterValidationAdapter