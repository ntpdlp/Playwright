import { Locator,Page } from "@playwright/test";

export class MenuTop{
    readonly page:Page;
    readonly signOutSel: Locator;

    constructor(page: Page){
        this.page = page;
        this.signOutSel = page.getByRole('button',{name:'Sign Out'});
    }

    async signOut(){
        await this.signOutSel.click();
    }
}