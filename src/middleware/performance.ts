import { Request, Response, NextFunction } from 'express';
import { setCache, getCache } from '../services/cache';

export const cacheMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const cacheKey = req.originalUrl;
  const cachedResponse = await getCache(cacheKey);

  if (cachedResponse) {
    return res.json(cachedResponse);
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    setCache(cacheKey, body);
    res.sendResponse(body);
  };

  next();
};