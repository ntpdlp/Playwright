import {test,expect} from '@playwright/test';

//testdata
const url = 'https://rahulshettyacademy.com/seleniumPractise/#/offers';

test('S08_Calendar', async ({ page }) => {
    await page.goto(url);
});
