"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// User end-to-end tests
test_1.test.describe('User Features', () => {
    (0, test_1.test)('should upload a new snap', async ({ page }) => {
        await page.goto('/upload');
        const filePath = path.resolve(__dirname, '../fixtures/sample.jpg');
        await page.setInputFiles('input[type="file"]', filePath);
        await page.click('button[type="submit"]');
        await (0, test_1.expect)(page).toHaveText('Snap uploaded successfully');
    });
    (0, test_1.test)('should view snaps', async ({ page }) => {
        await page.goto('/snaps');
        const snaps = await page.locator('.snap-item');
        await (0, test_1.expect)(snaps).toHaveCountGreaterThan(0);
    });
    (0, test_1.test)('should send a chat message', async ({ page }) => {
        await page.goto('/chats');
        await page.fill('textarea[name="message"]', 'Hello, this is a test message!');
        await page.click('button[type="submit"]');
        await (0, test_1.expect)(page).toHaveText('Message sent');
    });
});
