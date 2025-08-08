import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { AuthService } from '../services/authService';
import { logger } from '../utils/logger';

export class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const token = await AuthService.login(req.body);
      res.status(200).json({ token });
    } catch (error) {
      logger.error('Error during login:', error);
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
}