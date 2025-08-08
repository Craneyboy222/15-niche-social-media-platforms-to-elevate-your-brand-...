import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { auditLog } from './auditLog';

// CORS configuration
const corsOptions = {
  origin: 'https://example.com',
  optionsSuccessStatus: 200
};

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Input validation
const validateUserInput = [
  body('username').isLength({ min: 5 }).trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).custom((value, { req }) => {
    if (!/\d/.test(value) || !/[A-Z]/.test(value)) {
      throw new Error('Password must contain at least one number and one uppercase letter');
    }
    return true;
  })
];

// Password hashing
const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Security headers
const securityHeaders = helmet();

// Session management - using express-session for example
// const session = require('express-session');
// const sessionMiddleware = session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true, maxAge: 60000 }
// });

// Audit logging middleware
const auditLoggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  auditLog(req);
  next();
};

// Combine middlewares
const securityMiddleware = [
  cors(corsOptions),
  limiter,
  securityHeaders,
  validateUserInput,
  auditLoggingMiddleware
];

// Error handling for input validation
const validationErrorHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { securityMiddleware, validateUserInput, hashPassword, validationErrorHandler };