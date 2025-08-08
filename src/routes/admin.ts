import express from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { authenticateAdmin } from '../middleware/auth';
import { logger } from '../middleware/logger';
import { handleError } from '../middleware/error';
import { getUsers, deleteUser, getDashboardMetrics } from '../controllers/admin';

const router = express.Router();

// Validation schema for user deletion
const userDeletionSchema = checkSchema({
  userId: {
    in: ['params'],
    isInt: true,
    toInt: true,
    errorMessage: 'User ID must be an integer',
  },
});

// Route to get all users
router.get('/users', authenticateAdmin, async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    handleError(res, error);
  }
});

// Route to delete a user by ID
router.delete('/users/:userId', authenticateAdmin, userDeletionSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await deleteUser(req.params.userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
});

// Route to get analytics dashboard metrics
router.get('/analytics', authenticateAdmin, async (req, res) => {
  try {
    const metrics = await getDashboardMetrics();
    res.status(200).json(metrics);
  } catch (error) {
    handleError(res, error);
  }
});

// Logging middleware
router.use(logger);

export default router;