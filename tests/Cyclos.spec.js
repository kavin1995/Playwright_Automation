const {test,expect} = require('@playwright/test');
const exp = require('constants');
 
test('Cyclos', async({page})=>{
 
await page.goto("https://demo.cyclos.org/ui/home");
 
await page.click('id=login-link');
await page.fill('//input[@placeholder="User"]','demo');
await page.fill('//input[@placeholder="Password"]','1234');
await page.click("//*[text()='Submit']");
await page.click("//*[text()=' Pay user ']");
await page.waitForTimeout(1000);
await page.click("//*[@class='bi bi-book']//parent::icon//parent::button");
await page.waitForTimeout(3000);
expect(await page.locator("//*[text()='Select a contact']").textContent()).toContain('Select a contact');
await page.click("//*[text()=' Active Walking ']");
await page.waitForTimeout(3000);
await page.fill('//*[@type="tel"]','10');
await page.click("//*[text()='Next']");
expect(await page.locator("//*[text()=' Payment confirmation ']").textContent()).toContain(' Payment confirmation ');
await page.click("//*[text()='Confirm']");
console.log(await page.locator("//*[text()='The payment was successfully processed']").textContent());
await page.waitForTimeout(3000);

 
})