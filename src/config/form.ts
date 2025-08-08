/* Form configuration */
export const FORM_CONFIG = {
  validation: {
    username: {
      minLength: 3,
      maxLength: 20,
      regex: /^[a-zA-Z0-9_]+$/
    },
    email: {
      regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
      minLength: 8,
      mustContainNumber: true,
      mustContainSpecialChar: true
    }
  },
  errorMessages: {
    required: 'This field is required',
    invalidEmail: 'Invalid email address',
    passwordTooShort: 'Password must be at least 8 characters long',
    usernameInvalid: 'Username can only contain letters, numbers, and underscores'
  }
};