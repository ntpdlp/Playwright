import { expect , Locator, Page } from "@playwright/test";

export class ThankyouPage{

    readonly page: Page;
    readonly orderIdSel: Locator;

    constructor(page: Page){
        this.page = page;
        this.orderIdSel = page.locator('.em-spacer-1 .ng-star-inserted');
    }

    async verifyThankyouMessage(thankyouMessage: string){
        await this.page.locator('.hero-primary').waitFor();
        await expect(this.page.locator('.hero-primary')).toHaveText(thankyouMessage);
    }

    async verifyOrderDisplay(){

        const orderId = await this.orderIdSel.textContent();
        console.log(orderId);
        const pureOrderId = orderId.split("|").at(1).trim();
    
        //VP: check Order in orderlist
        await this.page.locator('button[routerlink="/dashboard/myorders"]').click();
        expect(await this.page.locator('table')
                .filter({has: this.page.locator('tbody')})
                .filter({has: this.page.locator('th')})
                .filter({hasText:pureOrderId})).toBeTruthy();
    }
}