import Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  email: Joi.string().email().required()
});

export const snapSchema = Joi.object({
  mediaUrl: Joi.string().uri().required(),
  expiresAt: Joi.date().greater('now').required()
});

export const chatSchema = Joi.object({
  senderId: Joi.number().integer().required(),
  receiverId: Joi.number().integer().required(),
  message: Joi.string().required()
});