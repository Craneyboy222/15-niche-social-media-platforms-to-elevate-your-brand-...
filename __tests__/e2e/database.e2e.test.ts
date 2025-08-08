import { test, expect } from '@playwright/test';

test('User can register and login', async ({ page }) => {
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
  expect(welcomeMessage).toContain('Welcome e2eUser');
});