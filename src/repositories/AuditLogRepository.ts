import { Pool } from 'pg';
import { AuditLog } from '../models/AuditLog';
import { BaseRepository } from './BaseRepository';

export class AuditLogRepository extends BaseRepository {
    constructor(pool: Pool) {
        super(pool);
    }

    async logAction(action: string, userId: number): Promise<void> {
        try {
            await this.pool.query(
                'INSERT INTO audit_logs (action, user_id, timestamp) VALUES ($1, $2, CURRENT_TIMESTAMP)',
                [action, userId]
            );
        } catch (error) {
            throw new Error(`Error logging action: ${error.message}`);
        }
    }

    // Additional methods for audit log retrieval and management
}
