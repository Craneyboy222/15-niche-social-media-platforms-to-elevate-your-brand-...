import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UserService } from '../services/userService';
import { logger } from '../utils/logger';

export class UserController {
  static async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      logger.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      logger.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}