import { Pool } from 'pg';

const pool = new Pool({ max: 20, idleTimeoutMillis: 30000, connectionTimeoutMillis: 2000 });

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

export const optimizeQuery = async () => {
  await pool.query('CREATE INDEX IF NOT EXISTS idx_user_id ON snaps(user_id);');
  await pool.query('CREATE INDEX IF NOT EXISTS idx_created_at ON snaps(created_at);');
};

optimizeQuery();

export const splitCode = () => {
  // Implement React code-splitting and lazy loading here
};