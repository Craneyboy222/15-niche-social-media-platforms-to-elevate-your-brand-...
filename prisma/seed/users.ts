/* User seed data */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedUsers() {
  await prisma.user.createMany({
    data: [
      { username: 'john_doe', email: 'john@example.com', password_hash: 'hashed_password_1' },
      { username: 'jane_doe', email: 'jane@example.com', password_hash: 'hashed_password_2' }
    ]
  });
}
