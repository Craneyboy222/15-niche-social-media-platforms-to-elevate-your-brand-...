/* Story seed data */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedStories() {
  await prisma.story.createMany({
    data: [
      { user_id: 1, media_url: 'http://example.com/story1.jpg' },
      { user_id: 2, media_url: 'http://example.com/story2.jpg' }
    ]
  });
}
