import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { authenticateUser, authorizeUser } from '../middlewares/auth';
import { createOrder, getOrder, updateOrder, deleteOrder } from '../controllers/orderController';
import { Order } from '../models/order';

const router = express.Router();

// Error handling middleware
const handleErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to create a new order
router.post('/',
  authenticateUser,
  authorizeUser('createOrder'),
  [
    body('product_id').isInt({ gt: 0 }).withMessage('Product ID must be a positive integer'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
    body('user_id').isInt({ gt: 0 }).withMessage('User ID must be a positive integer')
  ],
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const order: Order = await createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Route to get an order by ID
router.get('/:id',
  authenticateUser,
  authorizeUser('viewOrder'),
  [param('id').isInt({ gt: 0 }).withMessage('Order ID must be a positive integer')],
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const orderId = parseInt(req.params.id);
      const order = await getOrder(orderId);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      console.error('Error retrieving order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Route to update an order
router.put('/:id',
  authenticateUser,
  authorizeUser('updateOrder'),
  [
    param('id').isInt({ gt: 0 }).withMessage('Order ID must be a positive integer'),
    body('product_id').optional().isInt({ gt: 0 }).withMessage('Product ID must be a positive integer'),
    body('quantity').optional().isInt({ gt: 0 }).withMessage('Quantity must be a positive integer')
  ],
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const orderId = parseInt(req.params.id);
      const updatedOrder = await updateOrder(orderId, req.body);
      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(updatedOrder);
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Route to delete an order
router.delete('/:id',
  authenticateUser,
  authorizeUser('deleteOrder'),
  [param('id').isInt({ gt: 0 }).withMessage('Order ID must be a positive integer')],
  handleErrors,
  async (req: Request, res: Response) => {
    try {
      const orderId = parseInt(req.params.id);
      const deleted = await deleteOrder(orderId);
      if (!deleted) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
