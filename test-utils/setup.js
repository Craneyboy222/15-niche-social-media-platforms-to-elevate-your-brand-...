"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.expect.extend({
    toHaveCountGreaterThan(received, expected) {
        const pass = received.count() > expected;
        if (pass) {
            return {
                message: () => `expected ${received} to have count greater than ${expected}`,
                pass: true,
            };
        }
        else {
            return {
                message: () => `expected ${received} to have count greater than ${expected}`,
                pass: false,
            };
        }
    },
});
