const {test, expect} = require('@playwright/test')
 
test('Locaters', async({page})=>{
 
await page.goto("https://www.amazon.in/");
/*
await page.getByRole("link", {name:"Hello, sign in Account & Lists"}).click();
await page.getByRole("textbox", {name:"Email or mobile phone number"}).fill("qwerty@123");
await page.getByRole("button", {name:"Continue"}).click();
*/ 
//await page.getByRole("button",{name:"Open Menu"}).click();
await page.getByPlaceholder("Search Amazon.in").fill('Iphone');
 
})