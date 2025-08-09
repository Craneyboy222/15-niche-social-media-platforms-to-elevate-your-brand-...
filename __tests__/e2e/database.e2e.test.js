"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('User can register and login', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
    await page.fill('input[name="username"]', 'e2eUser');
    await page.fill('input[name="email"]', 'e2e@example.com');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="username"]', 'e2eUser');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');
    const welcomeMessage = await page.textContent('.welcome');
    (0, test_1.expect)(welcomeMessage).toContain('Welcome e2eUser');
});
