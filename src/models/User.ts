import prisma from '../lib/database';

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id }
  });
};

export const createUser = async (username: string, passwordHash: string, email: string) => {
  return await prisma.user.create({
    data: { username, passwordHash, email }
  });
};