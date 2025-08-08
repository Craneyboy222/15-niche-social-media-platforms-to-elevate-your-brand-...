/* Authentication types */

/**
 * Payload for user login.
 */
export interface LoginPayload {
  username: string;
  password: string;
}

/**
 * Response from login API.
 */
export interface LoginResponse {
  token: string;
  user: User;
}

/**
 * Represents a JSON Web Token.
 */
export interface JWT {
  token: string;
  expiresIn: number;
}

/**
 * Payload for user registration.
 */
export interface RegistrationPayload {
  username: string;
  email: string;
  password: string;
}