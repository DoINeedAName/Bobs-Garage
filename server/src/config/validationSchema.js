const Joi = require('joi')

const authSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required()
})

const blogSchema = Joi.object({
  heading: Joi.string().required(),
  image: Joi.string(),
  content: Joi.string().required()
})

const serviceSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string(),
  description: Joi.string(),
  price: Joi.string().pattern(new RegExp('^[0-9]')).required()
})

const reviewSchema = Joi.object({
  
  description: Joi.string(),
})

module.exports = {
  authSchema,
  blogSchema,
  serviceSchema,
  reviewSchema
}