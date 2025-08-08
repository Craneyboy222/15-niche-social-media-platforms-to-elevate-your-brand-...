import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export const applySecurityMiddlewares = (app) => {
  app.use(helmet());
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }));
};