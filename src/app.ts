import express from 'express';
import dotenv from 'dotenv';
import { json, urlencoded } from 'express';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Security settings
app.disable('x-powered-by');

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to SnapShare API');
});

export default app;