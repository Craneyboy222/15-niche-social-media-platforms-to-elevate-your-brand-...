/* Validation types */

/**
 * Validation result for a form.
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string[]>;
}

/**
 * Function signature for validating input data.
 */
export type Validator<T> = (data: T) => ValidationResult;