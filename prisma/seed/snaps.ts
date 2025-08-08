/* Snap seed data */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedSnaps() {
  await prisma.snap.createMany({
    data: [
      { user_id: 1, media_url: 'http://example.com/snap1.jpg', expires_at: new Date(new Date().setDate(new Date().getDate() + 1)) },
      { user_id: 2, media_url: 'http://example.com/snap2.jpg', expires_at: new Date(new Date().setDate(new Date().getDate() + 1)) }
    ]
  });
}
