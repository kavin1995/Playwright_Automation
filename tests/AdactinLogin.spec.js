const{test,expect}=require('@playwright/test');
const{LoginPage}=require('../Pages/LoginPage');

test('Login Test',async({page})=>{
    const name="KK123456";
    const pwd="KK@123";
    const lp=new LoginPage(page);
    await lp.goTo();
    await lp.login(name,pwd);
})