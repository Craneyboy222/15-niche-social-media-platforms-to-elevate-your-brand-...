import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Pool } from 'pg';
import { config } from 'dotenv';

config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// JWT Secret and Expiration
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRATION = '1h';

// Error Handling Function
function handleError(res: Response, error: Error, message: string, statusCode: number = 500) {
  console.error(error);
  return res.status(statusCode).json({ error: message });
}

// Request/Response Validation Middleware (Example)
function validateRequest(req: Request, res: Response, next: Function) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  next();
}

// User Registration
export async function registerUser(req: Request, res: Response): Promise<Response> {
  const { username, email, password } = req.body;

  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Insert user into database
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, email, password_hash]
    );

    // Respond with new user data
    const user = result.rows[0];
    return res.status(201).json(user);
  } catch (error) {
    return handleError(res, error, 'Failed to register user');
  }
}

// User Login
export async function loginUser(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  try {
    // Retrieve user
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

    // Respond with the token
    return res.json({ token });
  } catch (error) {
    return handleError(res, error, 'Failed to login user');
  }
}

// Token Verification Middleware
export function authenticateToken(req: Request, res: Response, next: Function) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (error: any, user: any) => {
    if (error) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
}
