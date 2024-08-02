const base = require('@playwright/test');
const {LoginPage} = require('./LoginPage.js');
const {ProductPage} = require('./ProductPage.js');
const {CartPage} = require('./CartPage.js');
const {ShippingPage} = require('./ShippingPage.js');
const {ThankyouPage} = require('./ThankyouPage.js');


exports.test = base.test.extend({
    loginPage: async({page},use) => {const loginPage = new LoginPage(page);},
    productPage: async ({page},use) => {const productPage = new ProductPage(page);},
    cartPage: async ({page},use) => {const cartPage = new CartPage(page);},
    shippingPage: async ({page},use) => {const shippingPage = new ShippingPage(page);},
    thankyouPage:async ({page},use) => {const thankyouPage = new ThankyouPage(page);},
});