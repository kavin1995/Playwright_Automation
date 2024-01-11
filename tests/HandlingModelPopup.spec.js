const {test,expect}=require('@playwright/test')

test('Model Popup', async({page})=>{

    await page.goto("https://demo.cyclos.org/ui/dashboard");
    await page.locator('//div[text()=" Login "]').click();
    await page.locator('//input[@placeholder="User"]').fill('demo');
    await page.locator('//input[@placeholder="Password"]').fill('1234');
    await page.locator('//span[text()="Submit"]').click();
    await page.locator('//div[text()=" Pay user "]').click();
    await page.locator("//*[@class='bi bi-book']//parent::icon//parent::button]").click();
    await page.locator('//span[text()=" Active Walking "]').click();


});