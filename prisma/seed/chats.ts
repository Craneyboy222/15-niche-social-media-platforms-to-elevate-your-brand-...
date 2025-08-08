/* Chat seed data */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedChats() {
  await prisma.chat.createMany({
    data: [
      { sender_id: 1, receiver_id: 2, message: 'Hello, Jane!' },
      { sender_id: 2, receiver_id: 1, message: 'Hi, John!' }
    ]
  });
}
