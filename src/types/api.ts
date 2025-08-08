/* API types */

/**
 * API Response format.
 */
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

/**
 * API error format.
 */
export interface ApiError {
  code: number;
  message: string;
  details?: string;
}

/**
 * Pagination parameters for API requests.
 */
export interface Pagination {
  limit: number;
  offset: number;
}