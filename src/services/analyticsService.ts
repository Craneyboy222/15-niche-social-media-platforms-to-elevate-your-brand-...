import { Request, Response, NextFunction } from 'express';
import { Analytics } from '../models/Analytics';

class AnalyticsService {
  async trackEvent(req: Request, res: Response, next: NextFunction) {
    const { userId, eventType, eventData } = req.body;
    try {
      await Analytics.create({ userId, eventType, eventData });
      res.json({ message: 'Event tracked successfully' });
    } catch (error) {
      console.error('Error tracking event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getUserAnalytics(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;
    try {
      const analytics = await Analytics.findAll({ where: { userId } });
      res.json(analytics);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default new AnalyticsService();