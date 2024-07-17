
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test , expect} from '@playwright/test';


//testData
const url = 'https://rahulshettyacademy.com/client/';
const username='ntpdlp@gmail.com';
const password='Test@123';

//selector
const productCartSel = '.card-body';
const product = 'IPHONE 13 PRO';

test('UI Control', async ({ page }) => {
    await page.goto(url);

    //login
    await page.locator('#userEmail').fill(username);
    await page.locator('#userPassword').fill(password);
    await page.getByRole('button',{id:'login'}).click();

    //changing page
    await page.waitForLoadState('networkidle');

    //find dynamic product
    const tiles = await page.locator(".card-body b").allTextContents();
    console.log(tiles);
    const products = page.locator(productCartSel);
    const productCount = await products.count();

   
    //add to cart
    for(let i=0;i<productCount; i++){
        const productName = await products.nth(i).locator('b').textContent();
        if(productName === product) {
            console.log(i);
            console.log(productName);
           // await products.nth(i).locator('.fa.fa-shopping-cart').click();
           await products.nth(i).locator('text= Add To Cart').click();
        }
        
    }

    //click on 'Cart'
    await page.locator('button[routerlink*="cart"]').click();

    //check on My Cart
    const cartSectionCount = await page.locator('.cartSection').count();
    for(let i=0; i<cartSectionCount; i++){
        const cartSelectionProd = await page.locator('.cartSection').nth(i).locator('h3').textContent();
        if(cartSelectionProd === product){
            const itemNumber = await page.locator('.cartSection').nth(i).locator('.itemNumber').textContent();
            console.log(itemNumber);
        }
    }

    //check out
    await page.getByRole('button',{name: 'Checkout'}).click();


    //place order -- shipping information
    await page.getByPlaceholder('Select Country').fill('Viet');
    await page.locator('section.ta-results button').click(); //click on Vietnam dropdown list
    await page.locator('//a[contains(text(),"Place Order")]').click(); //xpath
    
    //thank you for the order
    expect(await page.locator('//h1[contains(text(),"Thankyou for the order.")]').isVisible).toBeTruthy();

    await page.pause();
    //orders history page


 
});
