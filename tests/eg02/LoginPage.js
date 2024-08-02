
exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.userNameSel = page.locator('#userEmail');
        this.passwordSel = page.locator('#userPassword');
        this.loginBtnSel = page.getByRole('button',{id:'login'});
    }

    async login(username,password){

        //login
        await this.userNameSel.fill(username);
        await this.passwordSel.fill(password);
        await this.loginBtnSel.click();
        await this.page.waitForLoadState('networkidle');
    }

    async goto(url){
        await this.page.goto(url);
    }
}


