
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test , expect} from '@playwright/test';

//selector



//testData
const url = 'https://rahulshettyacademy.com/angularpractice/';

test('UI Control', async ({ page }) => {

    await page.goto(url);
    //await page.getByLabel('Name').fill('Hello');
    await  page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByPlaceholder('Password').fill('password');
    
    await page.locator('#exampleFormControlSelect1').selectOption('Female');

    await page.getByRole('button',{name: 'Submit'}).click();

    //click Shop link
    await page.getByRole('link',{name:'Shop'}).click();

    //click Add button under 1 card name iphone X
    await page
            .locator('app-card')
            .filter({hasText:'Samsung Note 8' })
            .getByRole('button',{name:'Add'})
            .click();

    await page.locator('//a[contains(text(),"Checkout")]').click();

    await page.pause();
});
