/* Error types */

/**
 * Base error for the application.
 */
export class AppError extends Error {
  public readonly code: string;
  public readonly details?: string;

  constructor(message: string, code: string, details?: string) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

/**
 * Error thrown when a user is not authenticated.
 */
export class AuthenticationError extends AppError {
  constructor(details?: string) {
    super('Authentication failed', 'AUTH_ERROR', details);
  }
}

/**
 * Error thrown when a user does not have permission to perform an action.
 */
export class AuthorizationError extends AppError {
  constructor(details?: string) {
    super('Authorization failed', 'AUTHZ_ERROR', details);
  }
}
