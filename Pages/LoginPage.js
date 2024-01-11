class LoginPage{
constructor(page){

    this.page = page;
    this.username=page.locator('id=username');
    this.password=page.locator('id=password');
    this.login=page.locator('#login');

}
async goTo(){
await this.page.goto("https://adactinhotelapp.com/index.php")

}
async login(pass,uname){
    await this.username.fill(uname);
    await this.password.fill(pass);
    await this.loginbtn.click();
}
}
module.exports={LoginPage}