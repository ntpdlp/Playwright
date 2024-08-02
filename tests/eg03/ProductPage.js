exports.ProductPage = class ProductPage {
    constructor(page){
        this.page = page;
        this.titlesSel = page.locator(".card-body b");
        this.productsSel = page.locator('.card-body');
    }

    async addToCart(product){
                //find dynamic product
                const tiles = await this.titlesSel.allTextContents();
                console.log(tiles);
                const productCount = await this.productsSel.count();
            
               
                //add to cart
                for(let i=0;i<productCount; i++){
                    const productName = await this.productsSel.nth(i).locator('b').textContent();
                    if(productName === product) {
                        console.log(productName);
                       // await products.nth(i).locator('.fa.fa-shopping-cart').click();
                       await this.productsSel.nth(i).locator('text= Add To Cart').click();
                    }
                    
                }
    }


}