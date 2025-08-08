import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const setCache = (key: string, value: any, ttl?: number) => {
  cache.set(key, value, ttl);
};

export const getCache = (key: string) => {
  return cache.get(key);
};

export const deleteCache = (key: string) => {
  cache.del(key);
};

export const flushCache = () => {
  cache.flushAll();
};

console.log('Cache utilities initialized.');