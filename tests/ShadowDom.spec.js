const {test,expect}=require('@playwright/test');
test('ShadowDom',async({page})=>{

    await page.goto("http://autopract.com/selenium/shadowdom1/");
   // console.log(await page.locator('div.target1').textContent());
    console.log(await page.locator('div.target2').textContent());
    console.log(await page.locator('div.target3').textContent());
    console.log(await page.locator('div.target1').first().textContent());
    console.log(await page.locator('div.target1').nth(1).textContent());
    console.log(await page.locator('div.target1').last().textContent());

    console.log(await page.locator(':light(div.target1)').textContent());
    


})
