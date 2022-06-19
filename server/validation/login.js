const Joi = require('joi');


const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string()
                  .min(5)
                  .max(15)
                  .required(),
    password: Joi.string()
                  .required()
                  .min(8)
                  .pattern(new RegExp('^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])'))      
  });
  return schema.validate(data)
}


module.exports = loginValidation;