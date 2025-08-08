import { Pool } from 'pg';
import { Logger } from '../utils/logger';

const pool = new Pool();

export class CategoryService {
  static async createCategory(name: string) {
    const client = await pool.connect();
    try {
      const res = await client.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
      return res.rows[0];
    } catch (error) {
      Logger.error('Error creating category', error);
      throw new Error('Unable to create category');
    } finally {
      client.release();
    }
  }

  static async getCategoryById(id: number) {
    const client = await pool.connect();
    try {
      const res = await client.query('SELECT * FROM categories WHERE id = $1', [id]);
      return res.rows[0];
    } catch (error) {
      Logger.error('Error retrieving category by ID', error);
      throw new Error('Unable to retrieve category');
    } finally {
      client.release();
    }
  }

  // Other category-related methods...
}
