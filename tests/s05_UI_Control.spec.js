
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test , expect} from '@playwright/test';

//selector
const usernameSel ='#username';
const passwordSel ='#password';
const documentSel ='a[href*="documents-request"]';


//testData
const url = 'https://rahulshettyacademy.com/loginpagePractise/';
const username='rahulshettyacademy';
const password='learning';

test('UI Control', async ({ context }) => {
    const page = await context.newPage();
    await page.goto(url);

    //enter username
    await page.getByLabel('Username').fill(username);

    //enter password
    await page.getByLabel('Password').fill(password);

    //select dropdown: Teacher
    await page.locator('select.form-control').selectOption({label:'Teacher'});

    //radio button: User option
    await page.getByLabel('User', {exact:true}).click();

    //click OK button on alert when changing to User option
    await page.locator('#okayBtn').click();
    
    //VALIDATE: 2 ways, the same purpose
    await expect(page.getByLabel('User', {exact:true})).toBeChecked; //await for action toBeChecked()
    expect (await page.getByLabel('User', {exact:true}).isChecked()).toBeTruthy(); ////await for action isChecked()

    //turn on Term
    await page.locator('.text-white.termsText').click();

    //click on blinking link to open 2nd window
    await expect(page.locator(documentSel)).toHaveAttribute('class','blinkingText');

    //need to listen event (page) before clicking on link
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator(documentSel).click(),
    ]);
    
    // on 2nd page: get the text 
    const headingText = await newPage.getByRole('heading',{name:'Documents request'}).textContent();
    console.log(headingText);




    await page.pause();
    await page.getByRole('button',{value:"Sign In"}).click();

    //await page.locator('#abc').click();
});
