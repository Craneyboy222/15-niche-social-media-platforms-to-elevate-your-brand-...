import { expect } from '@playwright/test';

expect.extend({
  toHaveCountGreaterThan(received, expected) {
    const pass = received.count() > expected;
    if (pass) {
      return {
        message: () => `expected ${received} to have count greater than ${expected}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to have count greater than ${expected}`,
        pass: false,
      };
    }
  },
});