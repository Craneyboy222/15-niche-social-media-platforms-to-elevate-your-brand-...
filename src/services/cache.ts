import Redis from 'ioredis';

const redisClient = new Redis();

export const setCache = async (key: string, value: any, expireTime: number = 3600) => {
  await redisClient.set(key, JSON.stringify(value), 'EX', expireTime);
};

export const getCache = async (key: string) => {
  const cachedData = await redisClient.get(key);
  return cachedData ? JSON.parse(cachedData) : null;
};

export default redisClient;