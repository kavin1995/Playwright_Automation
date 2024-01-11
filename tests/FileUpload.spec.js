const {test,expect} = require('@playwright/test');
 
test('Upload File', async({page})=>{
 
// await page.goto("http://autopract.com/selenium/upload1/");
// await page.locator('//*[@type="file"]').setInputFiles('tests/New.txt','tests/New2.txt'); //for multiple file upload
// await page.setInputFiles('//*[@type="file"]','tests/New.txt'); //for single file upload
// await page.locator('//*[@type="submit"]').click();
 
await page.goto("http://autopract.com/selenium/upload2/");
await page.waitForTimeout(2000);
const [fileChooser] = await Promise.all([
 page.waitForEvent('filechooser'),
await page.locator('id=pickfiles').click(),
await page.waitForTimeout(2000)
 ])
 
//await fileChooser.setFiles('tests/New.txt');
await fileChooser.setFiles({name:'Newfile.txt', mimeType:'text/plain',buffer:Buffer.from('This is Sample file')});
await page.locator('id=uploadfiles').cli;
  
})