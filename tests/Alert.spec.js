const {test, expect} = require('@playwright/test');
const { TIMEOUT } = require('dns'); 
 
test('Simple Alert',async({page})=>{
 
    await page.goto("http://autopract.com/selenium/alert5/", TIMEOUT,3000);
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('This is an Alert Box.')
        await page.waitForTimeout(1000);
        await dialog.accept(); 
 
    })
    await page.locator('id=alert-button').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('//*[@id="msg"]')).toHaveText('You clicked on Ok button.');  
 
});
 
test('Confirm Alert',async ({page})=>{
 
    await page.goto("http://autopract.com/selenium/alert5/", TIMEOUT,3000);
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Do you want to save changes?')
        await page.waitForTimeout(1000);
        await dialog.dismiss();
 
    })
    await page.locator('id=confirm-button').click();
    await page.waitForTimeout(1000);
    // const finalMsg = await expect(page.locator('//*[@id="msg"]').getAttribute('value'));
    // console.log(finalMsg);
    // await expect(finalMsg).toBe('Save Canceled!');
    await expect(page.locator('//*[@id="msg"]')).toHaveText('Save Canceled!');
 
});
 
test('prompt Alert',async ({page})=>{
 
    await page.goto("http://autopract.com/selenium/alert5/", TIMEOUT,3000);
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter any number')
        await page.waitForTimeout(2000);
       // await dialog.fill('20');
        await dialog.accept('20');
 
 
    })
    await page.locator('id=prompt-button').click();
    await page.waitForTimeout(3000);
   // await expect(page.locator('//*[@id="msg"]')).toHaveText('You have entered number: 20');
    const finalMsg = await page.locator('//*[@id="msg"]').textContent();
    console.log(finalMsg);
    await expect(finalMsg).toContain('You have entered number: 20');
 
});