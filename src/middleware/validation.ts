import { Request, Response, NextFunction } from 'express';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  // Basic validation logic
  console.log('Validating request...');
  next();
};