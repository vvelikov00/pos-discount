const Joi = require('joi');


const merchantsValidation = (data) => {
  const schema = Joi.object({
    password: Joi.string()
                  .required()
                  .min(8)
                  .pattern(new RegExp('^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])')),
    phone: Joi.string()
              .required()
              .min(8)
              .pattern(new RegExp('^0|^\\+359'))       
  });
  return schema.validate(data)
}


module.exports = merchantsValidation;