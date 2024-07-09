
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test } from '@playwright/test';


//testData
const url = 'https://rahulshettyacademy.com/loginpagePractise/';

test('UI Control', async ({ page }) => {
    await page.goto(url);
});
