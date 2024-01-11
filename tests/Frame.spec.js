const{test,expect}=require('@playwright/test')
test('Frame',async({page})=>{

    await page.goto("http://autopract.com/selenium/iframe1/");
    const myFrame=page.frame("testframe");
   // const myFrame = page.frame({url:/form1/});
    await myFrame.locator('(//input[@class="form-control"])').nth(0).fill("Kavin");
    await myFrame.fill('(//input[@class="form-control"])[1]',"abcd@gmail.com");
});