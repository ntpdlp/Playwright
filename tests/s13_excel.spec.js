
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test , expect} from '@playwright/test';

//selector



//testData
const url = 'https://rahulshettyacademy.com/upload-download-test/index.html';


test('UI Control', async ({ context }) => {
    const page = await context.newPage();
    await page.goto(url);


});
