import { query } from './database';

export const seedDatabase = async () => {
  try {
    await query(`
      INSERT INTO users (username, password_hash, email) VALUES
      ('user1', 'hashed_password1', 'user1@example.com'),
      ('user2', 'hashed_password2', 'user2@example.com')
      ON CONFLICT DO NOTHING;
    `);
    console.log('Database seeding completed');
  } catch (err) {
    console.error('Seeding error', err);
  }
};