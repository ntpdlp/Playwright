import { expect } from "@playwright/test";

exports.ThankyouPage = class ThankyouPage{
    constructor(page){
        this.page = page;
    }

    async verifyThankyouMessage(thankyouMessage){
        await this.page.locator('.hero-primary').waitFor();
        await expect(this.page.locator('.hero-primary')).toHaveText(thankyouMessage);
    }

    async verifyOrderDisplay(){

    
        const orderId = await this.page.locator('.em-spacer-1 .ng-star-inserted').textContent();
        console.log(orderId);
        const sampleTrim = orderId.split("|");
        const pureOrderId = sampleTrim.at(1).trim();
    
        //VP: check Order in orderlist
        await this.page.locator('button[routerlink="/dashboard/myorders"]').click();
        expect(await this.page.locator('table')
                .filter({has: this.page.locator('tbody')})
                .filter({has: this.page.locator('th')})
                .filter({hasText:pureOrderId})).toBeTruthy();
    }
}