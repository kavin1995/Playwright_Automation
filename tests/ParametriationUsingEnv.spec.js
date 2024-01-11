const{test,expect}=require('@playwright/test')
const path=require('path');
const { prependListener } = require('process');
const url =process.env.URL;
require('dotenv').config({
    path:path.join(__dirname,'../.env'),
})
test(`test with ${process.env.LOGIN}`,async({page})=>{

    console.log(process.env.LOGIN,process.env.PASSWORD)
    console.log(url);
        await page.goto(url);
        await page.locator('id=username').fill(process.env.LOGIN);
        await page.locator('id=password').fill(process.env.PASSWORD);
        await page.locator('#login').click();
        await expect(page).toHaveTitle("Adactin.com - Search Hotel")
})