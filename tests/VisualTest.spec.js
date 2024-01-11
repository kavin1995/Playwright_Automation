const {test,expect}=require('@playwright/test')

test('Visual Test', async({browser})=>{

const context= await browser.newContext();
const page = await context.newPage();
await page.goto("https://adactinhotelapp.com");
await expect(await page.screenshot()).toMatchSnapshot('loginPage.png');
});