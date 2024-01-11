const {test,expect, chromium} = require('@playwright/test');
const { timeStamp } = require('console');
 
    test('Google tittle Assertion', async ({})=>{   // Record the video for paticular test
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext({
        recordVideo:{
            dir:'videos/',
        }
    });
    const page = await context.newPage();
 
    await page.goto("https://adactinhotelapp.com/index.php");
    await page.screenshot({path:'screenshots/screen'+timeStamp()+'.png',fullPage:true});
    // Take the screenshot for the particular step

    await page.locator('id=username').fill("KK123456");
    //await page.locator('id=username').screenshot({path:'screenshots/screen1'+Date.now()+'.png',fullPage:true})
    await page.locator('id=password').fill("KK@123").screenshot({path:'screenshots/screen1'+Date.now()+'.png',fullPage:true});
    // Take screenshot for paticular tab or password filling dialog box

    await page.locator('#login').click();
    await page.waitForTimeout(2000);
   // const user = await (await page.locator('id=username_show').textContent()).trim();
   const user = await page.locator("//input[@id='username_show']").getAttribute('value');
    console.log(user);
   await expect(user).toBe('Hello ArunGurusamy!');
   await page.screenshot({path:'screenshots/screen'+timeStamp()+'.png',fullPage:true});
 
    // await page.locator('//*[@id="my_itinerary"]').click();
    // await page.locator('//*[@id="ids[]"]').click();
    // await expect(page.locator('//*[@name="ids[]"]')).toBeChecked();
    // await page.locator('//*[@name="cancelall"]').click();
    // await page.waitForTimeout(2000);
 
});
 
test('Sample Test', async()=>{
 
    console.log('This is Sample Test');
 
 
})