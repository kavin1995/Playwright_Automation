import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByPlaceholder('Search Amazon.in').fill('Iphone');
  await page.getByRole('button', { name: 'Go' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'iPhone 13 (128GB) - Midnight' }).nth(1).click();
  const page1 = await Promise.all([
    context.waitForEvent('page'),
     page1.getByLabel('Add to Cart').click(),
  await page1.getByLabel('Proceed to checkout (1 item)').click(),
 
  ]);
//   await page1.goto('https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?crid=2IUV9G63H993Q&keywords=Iphone&qid=1704691347&sprefix=iphone%2Caps%2C268&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1');
//   await page1.goto('https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?crid=2IUV9G63H993Q&keywords=Iphone&qid=1704691347&sprefix=iphone%2Caps%2C268&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
//   await page1.getByLabel('Add to Cart').click();
//   await page1.getByLabel('Proceed to checkout (1 item)').click();
  await expect(page1.locator('h1')).toContainText('Sign in');
});
