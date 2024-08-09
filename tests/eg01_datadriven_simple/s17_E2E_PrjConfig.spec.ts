
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test } from './base-test';
import { expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require('../../testdata/eg01_testdata.json')));




//testData from JSON object
const username = testdata.username;
const password = testdata.password;
let product = testdata.product;

//const
const url = "https://rahulshettyacademy.com/client/";

test('UI Control', { tag: '@regression' }, async ({ loginPage, productPage, cartPage, shippingPage, thankyouPage }) => {
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
    await thankyouPage.verifyOrderDisplay();


});


test('has title', { tag: '@smoke' }, async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('get started link',{tag: '@smoke'}, async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});