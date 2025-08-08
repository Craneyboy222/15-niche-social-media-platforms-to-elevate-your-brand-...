import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import { Request, Response } from 'express';
import { User } from '../types';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export class UserService {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        res.status(400).json({ message: 'Username, email and password are required.' });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await pool.query(
        'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
        [username, email, hashedPassword]
      );

      const user: User = result.rows[0];

      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({ message: 'Email and password are required.' });
        return;
      }

      const result = await pool.query('SELECT id, username, password_hash FROM users WHERE email = $1', [email]);

      if (result.rows.length === 0) {
        res.status(401).json({ message: 'Invalid email or password.' });
        return;
      }

      const user: User = result.rows[0];

      const isPasswordValid = await bcrypt.compare(password, user.password_hash);

      if (!isPasswordValid) {
        res.status(401).json({ message: 'Invalid email or password.' });
        return;
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getUserList(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool.query('SELECT id, username, email, created_at FROM users');

      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

// Sample TypeScript Type
declare module '../types' {
  export interface User {
    id: number;
    username: string;
    email: string;
    password_hash?: string;
    created_at?: Date;
  }
}