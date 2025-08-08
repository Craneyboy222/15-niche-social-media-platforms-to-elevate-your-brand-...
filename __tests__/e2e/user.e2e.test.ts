import { test, expect } from '@playwright/test';

// User end-to-end tests
test.describe('User Features', () => {
  test('should upload a new snap', async ({ page }) => {
    await page.goto('/upload');
    const filePath = path.resolve(__dirname, '../fixtures/sample.jpg');
    await page.setInputFiles('input[type="file"]', filePath);
    await page.click('button[type="submit"]');
    await expect(page).toHaveText('Snap uploaded successfully');
  });

  test('should view snaps', async ({ page }) => {
    await page.goto('/snaps');
    const snaps = await page.locator('.snap-item');
    await expect(snaps).toHaveCountGreaterThan(0);
  });

  test('should send a chat message', async ({ page }) => {
    await page.goto('/chats');
    await page.fill('textarea[name="message"]', 'Hello, this is a test message!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveText('Message sent');
  });
});