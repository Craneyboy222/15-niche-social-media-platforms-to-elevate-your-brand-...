import WebSocket from 'ws';
import { Logger } from '../utils/logger';

export class NotificationService {
  private static wss = new WebSocket.Server({ port: 8080 });

  static init() {
    this.wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        Logger.info('Received message:', message);
      });
      ws.send('Welcome to the notification service');
    });
  }

  static broadcast(message: string) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  // Other notification-related methods...
}
