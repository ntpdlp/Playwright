
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test , expect} from '@playwright/test';
import {LoginPage} from './LoginPage.js';
import {ProductPage} from './ProductPage.js';
import {CartPage} from './CartPage.js';
import { ShippingPage } from './ShippingPage.js';
import { ThankyouPage } from './ThankyouPage.js';


//testData
const url = 'https://rahulshettyacademy.com/client/';
const username='ntpdlp@gmail.com';
const password='Test@123';

let product = 'IPHONE 13 PRO';

test('UI Control', async ({ page }) => {

    //declare pages
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const shippingPage = new ShippingPage(page);
    const thankyouPage = new ThankyouPage(page);

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