/* Database types */

/**
 * Database schema for a User.
 */
export type DBUser = Omit<User, 'createdAt'> & {
  created_at: string;
}

/**
 * Database schema for a Snap.
 */
export interface DBSnap {
  id: number;
  user_id: number;
  media_url: string;
  created_at: string;
  expires_at: string;
}

/**
 * Database schema for a Chat.
 */
export interface DBChat {
  id: number;
  sender_id: number;
  receiver_id: number;
  message: string;
  created_at: string;
}

/**
 * Database schema for a Story.
 */
export interface DBStory {
  id: number;
  user_id: number;
  media_url: string;
  created_at: string;
}