const {expect} = require('@playwright/test')

exports.PlaywrightDevPage = class PlaywrightDevPage{

    constructor(page){
        this.page = page;
        this.getStartedLink = page.getByRole('link',{name:'Get started'});
        this.gettingStartedHeader = page.getByRole('h1',{name:'Installation'});
        this.pomLink = page.locator('li',{hasText:'Guides'})
                            .locator('a',{hasText:'Page Object Model'});
       
    }

    async goto(){
        await this.page.goto('https://playwright.dev');
    }

    async getStarted(){
        await this.getStartedLink.first().click();
        await expect(this.gettingStartedHeader).toBeVisible();
    }

    async pageObjectModel(){
        await this.getStarted();
        await this.pomLink.click();
    }
};