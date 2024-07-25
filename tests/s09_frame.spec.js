
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test , expect} from '@playwright/test';

//testData
const url = 'https://rahulshettyacademy.com/AutomationPractice/';


test('UI Control', async ({ page }) => {
    await page.goto(url);

    //dialog
    await page.getByPlaceholder('Enter Your Name').fill("Phuong");
    await page.getByText('Confirm').click();

    await page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    });

    //frame
    const iframe = await page.frameLocator('#courses-iframe');
    await page.pause();
    await iframe.getByRole('link',{name:'Courses',exact:true}).click();
});
