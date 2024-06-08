const Joi = require('joi');

const aparelho = Joi.object({
    nome: Joi
        .string()
        .min(1)
        .max(30)
        .required(),

    imagem: Joi.string()
        .uri()
        .required(),

    preco: Joi.string()
        .min(1)
        .max(30)
        .optional()

});

module.exports = aparelho