const{test,expect}=require('@playwright/test');
const { TIMEOUT } = require('dns');

test('Multiple Frame',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/nested_frames",TIMEOUT,9000);
    const parentframe=await page.frameLocator("//frame[@name='frame-top']");
    const leftFrame=await parentframe.frameLocator('frame[name="frame-left"]').locator('body');
    const ltext = await leftFrame.textContent();
    console.log(ltext);

    const middleFrame = await parentframe.frameLocator('frame[name="frame-middle"]').locator('body');
    const mtext= await middleFrame.textContent();
    console.log(mtext);

    const rightFrame = await parentframe.frameLocator('frame[name="frame-right"]').locator('body');
    const rtext = await rightFrame.textContent();
    console.log(rtext);

}
);