const { test, expect } = require('@playwright/test');
 
test('Assertions', async ({ page }) => {
 
    await page.goto("https://www.amazon.in/");
     await page.getByRole("link", { name: "Hello, sign in Account & Lists" }).click();
    //  await page.waitForTimeout(2000);
   // await expect(await page.locator("//*[@class='a-form-label']")).toHaveText('Email or mobile phone number');
    expect(await page.locator("//*[@class='a-form-label']")).toContainText('Email or mobile ');
    await expect(await page.locator("//*[@class='a-form-label']")).not.toContainText('Laptop');
 
});
 
test.only('Assert Attribute', async ({ page }) => {
 
    await page.goto("https://adactinhotelapp.com/index.php");
    await expect(page.locator('id=username')).toHaveAttribute('id','username');
    await expect(page.locator('id=username')).toHaveAttribute('class',/login/);
    await expect(page.locator('id=username')).toHaveAttribute('value','');
    await expect.soft(page.locator('id=username')).toHaveAttribute('id','usernamei')
     // soft assertion it will not stop the code
    await expect(page.locator('id=username')).toHaveClass('login_input');
   
 
})