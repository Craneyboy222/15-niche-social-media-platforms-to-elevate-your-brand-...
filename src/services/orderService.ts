import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg';
import { Order } from '../types/order';
import { validateOrder, validateOrderId } from '../validators/orderValidator';
import { logger } from '../utils/logger';
import { authorizeUser } from '../middleware/auth';

const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db',
  password: 'your_db_password',
  port: 5432,
});

export class OrderService {
  static async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const orderData: Order = req.body;

      // Validate order data
      const { error } = validateOrder(orderData);
      if (error) return res.status(400).json({ error: error.details[0].message });

      // Authenticate and authorize user
      const userId = authorizeUser(req);
      if (!userId) return res.status(401).json({ error: 'Unauthorized' });

      const query = 'INSERT INTO orders(user_id, item, quantity, status) VALUES($1, $2, $3, $4) RETURNING *';
      const values = [userId, orderData.item, orderData.quantity, 'pending'];

      const result = await pool.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      logger.error('Error creating order', err);
      next(err);
    }
  }

  static async getOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const orderId = req.params.id;

      // Validate order ID
      const { error } = validateOrderId(orderId);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const query = 'SELECT * FROM orders WHERE id = $1';
      const values = [orderId];

      const result = await pool.query(query, values);
      if (result.rows.length === 0) return res.status(404).json({ error: 'Order not found' });

      res.status(200).json(result.rows[0]);
    } catch (err) {
      logger.error('Error retrieving order', err);
      next(err);
    }
  }

  static async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const orderId = req.params.id;
      const updateData: Partial<Order> = req.body;

      // Validate order ID and update data
      const idValidation = validateOrderId(orderId);
      if (idValidation.error) return res.status(400).json({ error: idValidation.error.details[0].message });

      const orderValidation = validateOrder(updateData, true);
      if (orderValidation.error) return res.status(400).json({ error: orderValidation.error.details[0].message });

      const query = 'UPDATE orders SET item = COALESCE($1, item), quantity = COALESCE($2, quantity), status = COALESCE($3, status) WHERE id = $4 RETURNING *';
      const values = [updateData.item, updateData.quantity, updateData.status, orderId];

      const result = await pool.query(query, values);
      if (result.rows.length === 0) return res.status(404).json({ error: 'Order not found' });

      res.status(200).json(result.rows[0]);
    } catch (err) {
      logger.error('Error updating order', err);
      next(err);
    }
  }

  static async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const orderId = req.params.id;

      // Validate order ID
      const { error } = validateOrderId(orderId);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const query = 'DELETE FROM orders WHERE id = $1 RETURNING *';
      const values = [orderId];

      const result = await pool.query(query, values);
      if (result.rows.length === 0) return res.status(404).json({ error: 'Order not found' });

      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
      logger.error('Error deleting order', err);
      next(err);
    }
  }
}

// Example usage in an Express router
// import { OrderService } from './orderService';
// router.post('/orders', OrderService.createOrder);
// router.get('/orders/:id', OrderService.getOrder);
// router.put('/orders/:id', OrderService.updateOrder);
// router.delete('/orders/:id', OrderService.deleteOrder);
