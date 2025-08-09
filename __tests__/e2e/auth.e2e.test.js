"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// Authentication end-to-end tests
test_1.test.describe('Authentication', () => {
    (0, test_1.test)('should register a new user', async ({ page }) => {
        await page.goto('/register');
        await page.fill('input[name="username"]', 'newuser');
        await page.fill('input[name="email"]', 'newuser@example.com');
        await page.fill('input[name="password"]', 'Password123');
        await page.click('button[type="submit"]');
        await (0, test_1.expect)(page).toHaveURL('/dashboard');
    });
    (0, test_1.test)('should log in an existing user', async ({ page }) => {
        await page.goto('/login');
        await page.fill('input[name="email"]', 'existinguser@example.com');
        await page.fill('input[name="password"]', 'Password123');
        await page.click('button[type="submit"]');
        await (0, test_1.expect)(page).toHaveURL('/dashboard');
    });
    (0, test_1.test)('should not log in with invalid credentials', async ({ page }) => {
        await page.goto('/login');
        await page.fill('input[name="email"]', 'wronguser@example.com');
        await page.fill('input[name="password"]', 'wrongpassword');
        await page.click('button[type="submit"]');
        await (0, test_1.expect)(page).toHaveText('Invalid credentials');
    });
});
