import { body, param } from 'express-validator';

export const userValidationRules = () => [
  body('username').isString().isLength({ min: 3, max: 255 }),
  body('email').isEmail(),
  body('password').isString().isLength({ min: 6 }),
];

export const snapValidationRules = () => [
  body('media_url').isURL(),
  param('id').isInt(),
];