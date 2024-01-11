const { test, expect } = require('@playwright/test');
 
test('Popup', async ({ page }) => {
 
    await page.goto("http://autopract.com/selenium/popup/");
 
    const [nwePopup] = await Promise.all([
 
        page.waitForEvent('popup'),
        await page.locator('//*[@target="popup"]').click()
 
    ])
 
    await nwePopup.waitForLoadState();
 
    console.log(await nwePopup.url());
 
    await nwePopup.click('//*[@class="nav-link"]');
 
    expect(await nwePopup.locator('//span[text()="About Us"]').textContent()).toContain('About Us');
 
    await page.waitForTimeout(3000);
 
    expect(await page.locator('//*[@class="open-button"]').textContent()).toContain('JQuery Popup Model');
 
    console.log(await page.locator('//*[@class="open-button"]').textContent());
 
 
})
 
test.only('Model Popup', async ({ page }) => {
 
    await page.goto("http://autopract.com/selenium/popup/");
 
    await page.locator('//*[@class="open-button"]').click();
 
    await page.waitForTimeout(5000);
 
    console.log(await page.locator('//p[text()="This is Sample Popup."]').textContent());
 
    await page.click('//*[@class="close-button"]');
 
    await page.waitForTimeout(2000);
 
 
})