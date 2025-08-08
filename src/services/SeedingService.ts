import db from '../lib/database';

class SeedingService {
  async seed() {
    try {
      // Placeholder for seeding logic
      await db.query('INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3)', ['testuser', 'hash', 'test@example.com']);
    } catch (error) {
      throw new Error(`Seeding failed: ${error.message}`);
    }
  }
}

export default new SeedingService();