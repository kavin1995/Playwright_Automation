const {test,expect} = require('@playwright/test');
 
 
test('Login to Adactin', async({page})=>{
    await page.goto("https://adactinhotelapp.com/index.php");
    await page.locator('id=username').fill("ArunGurusamy");
    await page.locator('id=password').fill("30529S");
    await page.locator('#login').click();
    await page.waitForTimeout(2000);
   // const user = await (await page.locator('id=username_show').textContent()).trim();
//    const user = await page.locator('//input[@id="username_show"]').textContent();
//     console.log("Username is "+ user);
//     expect(user).toContain("Hello ArunGurusamy!");
 
    //Handle Dropdown in Select tag
    await page.locator('//select[@id="location"]').selectOption('London');
    await page.locator('//select[@id="hotels"]').selectOption({index: 2});
    await page.locator('//select[@id="room_type"]').selectOption({label:'Standard'});
    await page.locator('//select[@id="room_nos"]').selectOption('1');
    await page.locator('//*[@id="Submit"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//*[@id="radiobutton_0"]').click();
    await expect(page.locator('//*[@id="radiobutton_0"]')).toBeChecked();
    await page.locator('//*[@id="continue"]').click();
    await page.locator('//*[@id="first_name"]').fill('Arun');
    await page.locator('//*[@id="last_name"]').fill('G');
    await page.locator('//*[@id="address"]').fill('Chennai');
    await page.locator('//*[@id="cc_num"]').fill('1234567890123456');
    await page.locator('//*[@id="cc_type"]').selectOption('VISA');
    await page.locator('//*[@id="cc_exp_month"]').selectOption('January');
    await page.locator('//*[@id="cc_exp_year"]').selectOption('2030');
    await page.locator('//*[@id="cc_cvv"]').fill('007');
    await page.locator('//*[@id="book_now"]').click();
    await page.waitForTimeout(4000);
    const confirmMsg = await page.locator('//*[text()="Booking Confirmation "]').textContent();
    console.log("Booking Status is "+ confirmMsg);
    await expect(confirmMsg).toBe('Booking Confirmation ');
    const orderId = await page.locator('//*[@id="order_no"]').getAttribute('value');
    console.log("The Order is "+ orderId);
    await page.waitForTimeout(2000);
   
 
});