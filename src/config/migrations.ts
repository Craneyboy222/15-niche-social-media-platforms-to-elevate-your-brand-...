import { Client } from 'pg';
import { DATABASE_URL } from './env';

const client = new Client({
  connectionString: DATABASE_URL,
});

client.connect();

export const runMigrations = async () => {
  // Add migration code here
  console.log('Running database migrations');
  await client.end();
};