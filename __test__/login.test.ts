// Chromium is open source and developed by google. The source code can be compiled into a web browser
import { chromium } from "playwright/test";
describe('Login and Signout', () => {
    test('Open Letcode', async () => {
        const browser = await chromium.launch({
            headless: false
        })  //launch will return browser instance (Their is no way to change this one so const will be more appropriate)
        const context = await browser.newContext({
            recordVideo: {
                dir: "./videos/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        }) // Used to open a new browser (Playwright we can open multiple browser)
        const page = await context.newPage();  // creating new tab withing browser
        await page.goto('https://Letcode.in/')
        await page.click("text=Log in")
        await page.fill("input[name='email']", 'koushik350@gmail.com')
        await page.fill("input[name='password']", 'Pass123$')
        await page.click("button:text('LOGIN')")
        await page.click("a:text('Sign Out')")
        // await page.click("'Sign Out'") for above we can do like this also it text so need to add in two quotes


        await browser.close()
    })
})