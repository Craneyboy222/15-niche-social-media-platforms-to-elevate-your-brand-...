import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

class AdminService {
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateUserRole(req: Request, res: Response, next: NextFunction) {
    const { userId, role } = req.body;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.role = role;
      await user.save();
      res.json({ message: 'User role updated successfully' });
    } catch (error) {
      console.error('Error updating user role:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default new AdminService();