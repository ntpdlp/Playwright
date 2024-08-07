
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test } from './my-test';
import { expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require('../../utils/eg02_testdata.json')));






//const
const url = "https://rahulshettyacademy.com/client/";


for (let prod of testdata) {

    //testData from JSON object
    const username = prod.username;
    const password = prod.password;
    let product = prod.product;

    test(`UI Control ${prod.product}`, async ({ loginPage, productPage, cartPage, shippingPage, thankyouPage, menuTop }) => {
        /*
            //declare pages
            const  = new ProductPage(page);
            const  = new CartPage(page);
            const  = new ShippingPage(page);
            const  = new ThankyouPage(page);
        */


        //login page
        await loginPage.goto(url);
        await loginPage.login(username, password);

        //product page
        await productPage.addToCart(product);


        //cart page
        await cartPage.navigate();
        await cartPage.checkoutCart(product);


        //place order -- shipping information
        await shippingPage.fillShippingInfor('Vietnam');


        //thank you for the order
        await thankyouPage.verifyThankyouMessage("Thankyou for the order.");
        //await thankyouPage.verifyOrderDisplay();

        //logout
        await menuTop.signOut();

    });
}


