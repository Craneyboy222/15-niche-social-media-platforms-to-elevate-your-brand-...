import { Pool } from 'pg';

export abstract class BaseRepository {
    protected pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    protected async executeQuery<T>(query: string, params: any[]): Promise<T[]> {
        try {
            const result = await this.pool.query(query, params);
            return result.rows;
        } catch (error) {
            throw new Error(`Database query error: ${error.message}`);
        }
    }
}
