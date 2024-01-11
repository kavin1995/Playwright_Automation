const { test, expect } = require('@playwright/test');
const{LoginPage}=require('../Pages/LoginPage');
const{SearchHotelPage}=require('../Pages/SearchHotelPage');
const { parseArgs } = require('util');
// test.describe.configure({ mode: 'serial' })
let page;
test.beforeAll('Before All', async ({ browser }) => {
    page = await browser.newPage();
})
 
test('Login Test',async({page})=>{
    const name="KK123456";
    const pwd="KK@123";
    const lp=new LoginPage(page);
    await lp.goTo();
    await lp.login(name,pwd);
})
 
test('Search Hotel', async () => {
    const namecity ="Adelaide";
    const HotelN = "Hotel Sunshine";
    const typeR ="Deluxe";
    const RoomN = "2 - Two";

    const shp = new SearchHotelPage(page);
    shp.searchHotel(namecity,HotelN,typeR,RoomN);
})

