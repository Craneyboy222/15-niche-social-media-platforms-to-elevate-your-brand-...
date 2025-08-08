import Redis from 'ioredis';

class CacheService {
  private redis;

  constructor() {
    this.redis = new Redis();
  }

  async set(key: string, value: any, ttl: number) {
    try {
      await this.redis.set(key, JSON.stringify(value), 'EX', ttl);
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  }

  async get(key: string) {
    try {
      const data = await this.redis.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting cache:', error);
      return null;
    }
  }
}

export default new CacheService();