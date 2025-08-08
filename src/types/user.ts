/* User types */

/**
 * Represents a user in the application.
 */
export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  passwordHash: string;
}

/**
 * Represents user profile information.
 */
export interface UserProfile {
  userId: number;
  bio?: string;
  avatarUrl?: string;
  privacySettings: PrivacySettings;
}

/**
 * Privacy settings for a user.
 */
export interface PrivacySettings {
  canViewContent: 'everyone' | 'friends' | 'only me';
  canSendMessage: 'everyone' | 'friends';
}