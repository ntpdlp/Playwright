
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import {test} from './base-test';
import { expect} from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require('../../testdata/eg01_testdata.json')));




//testData from JSON object
const username=testdata.username;
const password=testdata.password;
let product = testdata.product;

//const
const url = "https://rahulshettyacademy.com/client/";

test('UI Control', async ({loginPage, productPage,cartPage,shippingPage,thankyouPage}) => {
    /*
        //declare pages
        const  = new ProductPage(page);
        const  = new CartPage(page);
        const  = new ShippingPage(page);
        const  = new ThankyouPage(page);
    */

        
    //login page
    await loginPage.goto(url);
    await loginPage.login(username,password);

    //product page
    await productPage.addToCart(product);


    //cart page
    await cartPage.navigate();
    await cartPage.checkoutCart(product);


    //place order -- shipping information
    await shippingPage.fillShippingInfor('Vietnam');

    
    //thank you for the order
    await thankyouPage.verifyThankyouMessage("Thankyou for the order.");
    await thankyouPage.verifyOrderDisplay();

 
});