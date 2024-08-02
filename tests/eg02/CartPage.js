exports.CartPage = class CartPage{
    constructor(page){
        this.page = page;
    }

    async navigate(){
        await this.page.locator('button[routerlink*="cart"]').click();
    }

    async checkoutCart(product){
        //check on My Cart
        const cartSectionCount = await this.page.locator('.cartSection').count();
        for(let i=0; i<cartSectionCount; i++){
            const cartSelectionProd = await this.page.locator('.cartSection').nth(i).locator('h3').textContent();
            if(cartSelectionProd === product){
                //Playwright augments Standard-CSS Selectors in 2 ways: standard DOM , pseudo-classes like :has-text(),:visible(), ...
                const itemNumber = await this.page.locator('.cartSection').nth(i).locator('.itemNumber').textContent();
                console.log(itemNumber);
                break;
            }
        }

        //check out
        await this.page.getByRole('button',{name: 'Checkout'}).click();
    }
}