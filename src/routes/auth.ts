import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { Pool } from 'pg';
import { Logger } from '../utils/logger';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();
const pool = new Pool();
const logger = new Logger();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// User registration
router.post(
  '/register',
  [
    body('username').isString().trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isString().trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
      const client = await pool.connect();
      const hash = await bcrypt.hash(password, 10);
      const result = await client.query(
        'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
        [username, email, hash]
      );
      client.release();
      res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
      logger.error('Error registering user', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// User login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isString().withMessage('Password is required'),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT id, password_hash FROM users WHERE email = $1', [email]);
      client.release();

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = result.rows[0];
      const isMatch = await bcrypt.compare(password, user.password_hash);

      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      logger.error('Error logging in', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Middleware to verify token
router.use(authMiddleware);

// Protected route example
router.get('/profile', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to your profile' });
});

export default router;
