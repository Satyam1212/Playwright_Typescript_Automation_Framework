// Chromium is open source and developed by google. The source code can be compiled into a web browser
import { chromium } from "playwright/test";
describe('Launch Browser', () => {
    test('Open Letcode', async () => {
        const browser = await chromium.launch({
            headless: false
        })  //launch will return browser instance (Their is no way to change this one so const will be more appropriate)
        const context = await browser.newContext() // Used to open a new browser (Playwright we can open multiple browser)
        const page = await context.newPage();  // creating new tab withing browser
        await page.goto('https://Letcode.in/')
        await browser.close()
    })
})