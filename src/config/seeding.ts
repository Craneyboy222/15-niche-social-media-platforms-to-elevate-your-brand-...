import pool from './database';

export const seedDatabase = async () => {
  console.log('Seeding database...');
  try {
    await pool.query(`INSERT INTO users (username, email, password_hash) VALUES ('testuser', 'test@example.com', 'hashed_password');`);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database', error);
  }
};