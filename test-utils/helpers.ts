import { Client } from 'pg';

export const setupDatabase = async () => {
  const client = new Client();
  await client.connect();
  await client.query('BEGIN');
  // Add more setup logic if necessary
  await client.end();
};

export const teardownDatabase = async () => {
  const client = new Client();
  await client.connect();
  await client.query('ROLLBACK');
  await client.end();
};