// API routes
import express from 'express';
import authRoutes from './auth';
import userRoutes from './users';
import snapsRoutes from './snaps';
import chatsRoutes from './chats';
import storiesRoutes from './stories';

const router = express.Router();

// Mount individual feature routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/snaps', snapsRoutes);
router.use('/chats', chatsRoutes);
router.use('/stories', storiesRoutes);

export default router;