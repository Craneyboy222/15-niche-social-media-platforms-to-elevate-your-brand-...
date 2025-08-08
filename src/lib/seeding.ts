import { seedDatabase } from '../utils/seeding';

const runSeeding = async () => {
  try {
    await seedDatabase();
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
};

runSeeding();