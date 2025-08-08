import { Pool } from 'pg';
import { Notification } from '../models/Notification';
import { BaseRepository } from './BaseRepository';

export class NotificationRepository extends BaseRepository {
    constructor(pool: Pool) {
        super(pool);
    }

    async createNotification(notification: Notification): Promise<Notification> {
        try {
            const result = await this.pool.query(
                'INSERT INTO notifications (user_id, message, is_read) VALUES ($1, $2, $3) RETURNING *',
                [notification.user_id, notification.message, notification.is_read]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error(`Error creating notification: ${error.message}`);
        }
    }

    async getUserNotifications(userId: number): Promise<Notification[]> {
        try {
            const result = await this.pool.query('SELECT * FROM notifications WHERE user_id = $1', [userId]);
            return result.rows;
        } catch (error) {
            throw new Error(`Error fetching notifications for user: ${error.message}`);
        }
    }

    // Additional methods for notification management
}
