/* Common types */

/**
 * Represents a media item (photo or video).
 */
export interface MediaItem {
  url: string;
  type: 'photo' | 'video';
}

/**
 * Represents a chat message.
 */
export interface ChatMessage {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  createdAt: Date;
}

/**
 * Notification settings.
 */
export interface NotificationSettings {
  receivePushNotifications: boolean;
  receiveEmailNotifications: boolean;
}