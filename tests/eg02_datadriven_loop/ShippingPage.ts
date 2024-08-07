import { Locator,Page } from "@playwright/test";

export class ShippingPage{

    readonly page: Page;


    constructor(page: Page){
        this.page = page;
    }

    async fillShippingInfor(country: string){
        await this.page.getByPlaceholder('Select Country').pressSequentially(country);
        await this.page.locator('section.ta-results')
                .filter({hasText:country})
                .click();
        await this.page.locator('//a[contains(text(),"Place Order")]').click(); //xpath
    }
}