import { Request } from 'express';
import { appendFileSync } from 'fs';

export const logSecurityEvent = (req: Request, message: string) => {
  const logEntry = `${new Date().toISOString()} - ${req.ip} - ${message}\n`;
  appendFileSync('security.log', logEntry);
};