import { Pool } from 'pg';
import { Logger } from '../utils/logger';

const pool = new Pool();

export class ReviewService {
  static async createReview(userId: number, productId: number, rating: number, comment: string) {
    const client = await pool.connect();
    try {
      if (rating < 1 || rating > 5) {
        throw new Error('Rating must be between 1 and 5');
      }
      const res = await client.query('INSERT INTO reviews (user_id, product_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *', [userId, productId, rating, comment]);
      return res.rows[0];
    } catch (error) {
      Logger.error('Error creating review', error);
      throw new Error('Unable to create review');
    } finally {
      client.release();
    }
  }

  // Other review-related methods...
}
