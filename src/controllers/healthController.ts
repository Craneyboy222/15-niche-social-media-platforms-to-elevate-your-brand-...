import { Request, Response } from 'express';

export class HealthController {
  static async check(req: Request, res: Response): Promise<void> {
    res.status(200).json({ status: 'OK' });
  }
}