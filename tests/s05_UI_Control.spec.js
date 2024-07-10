
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test , expect} from '@playwright/test';

//selector
const usernameSel ='#username';
const passwordSel ='#password';
const adminSel = '';
const userSel='';
const iAgreeSel='';
const signInSel ='';

//testData
const url = 'https://rahulshettyacademy.com/loginpagePractise/';
const username='rahulshettyacademy';
const password='learning';

test('UI Control', async ({ page }) => {
    await page.goto(url);
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').fill(password);
    await page.locator('select.form-control').selectOption({label:'Teacher'});
    await page.getByLabel('User', {exact:true}).click();
    await page.locator('#okayBtn').click();
    
    //2 ways, the same purpose
    await expect(page.getByLabel('User', {exact:true})).toBeChecked; //await for action toBeChecked()
    expect (await page.getByLabel('User', {exact:true}).isChecked()).toBeTruthy(); ////await for action isChecked()

    
    await page.locator('.text-white.termsText').click();

    await page.pause();
    await page.getByRole('button',{value:"Sign In"}).click();

    //await page.locator('#abc').click();
});
