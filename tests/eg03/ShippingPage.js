exports.ShippingPage = class ShippingPage{
    constructor(page){
        this.page = page;
    }

    async fillShippingInfor(country){
        await this.page.getByPlaceholder('Select Country').pressSequentially(country);
        await this.page.locator('section.ta-results')
                .filter({hasText:country})
                .click();
        await this.page.locator('//a[contains(text(),"Place Order")]').click(); //xpath
    }
}