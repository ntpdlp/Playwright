const {test,expect} = require('@playwright/test');
const {PlaywrightDevPage} = require('./playwright-dev-page.js');


test('TC01',async ({page}) =>{
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.getStarted();
});