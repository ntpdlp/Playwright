import {Locator, Page} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly userNameSel: Locator;
    readonly passwordSel: Locator;
    readonly loginBtnSel: Locator;

    constructor(page: Page){
        this.page = page;
        this.userNameSel = page.locator('#userEmail');
        this.passwordSel = page.locator('#userPassword');
        this.loginBtnSel = page.locator('#login');
    }

    async login(username: string,password: string){

        //login
        await this.userNameSel.fill(username);
        await this.passwordSel.fill(password);
        await this.loginBtnSel.click();
        await this.page.waitForLoadState('networkidle');
    }

    async goto(url: string){
        await this.page.goto(url);
    }
}


