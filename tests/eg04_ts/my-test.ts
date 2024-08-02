import {test as baseTest} from '@playwright/test';
import {LoginPage} from './LoginPage';
import {ProductPage} from './ProductPage';
import {CartPage} from './CartPage';
import {ShippingPage} from './ShippingPage';
import {ThankyouPage} from './ThankyouPage';


export const test = baseTest.extend<{
    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage;
    shippingPage: ShippingPage;
    thankyouPage: ThankyouPage;
}>({
    loginPage: async({page},use) => {
        await use(new LoginPage(page));
    },
    productPage: async ({page},use) => {
        await use (new ProductPage(page));
    },
    cartPage: async ({page},use) => {
        await use(new CartPage(page));
    },
    shippingPage: async ({page},use) => {
        await use(new ShippingPage(page));
    },
    thankyouPage:async ({page},use) => {
        await use(new ThankyouPage(page));
    },
});