import { Pool } from 'pg';
import { User } from '../models/User';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository {
    constructor(pool: Pool) {
        super(pool);
    }

    async createUser(user: User): Promise<User> {
        try {
            const result = await this.pool.query(
                'INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING *',
                [user.username, user.password_hash, user.email]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async findUserById(id: number): Promise<User | null> {
        try {
            const result = await this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
            return result.rows[0] || null;
        } catch (error) {
            throw new Error(`Error fetching user by ID: ${error.message}`);
        }
    }

    // Additional methods for user retrieval and management
}
