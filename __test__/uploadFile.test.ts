import { chromium } from "playwright/test";
import { expect } from '@playwright/test';

describe('Upload file', () => {
    const filePath1 = '../videos/a1.webm';

    test("Upload file using set input", async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();

        const page = await context.newPage()

        await page.goto('https://www.sendgb.com/')
        // await page.setInputFiles("#drag-drop-area", filePath1) // I am having div element selector this will not work here, need only input element selector

        // added event listener to div element
        page.on('filechooser', async (fileChooser) => {
            await fileChooser.setFiles(filePath1)
        });

        await expect(page.getByRole('tab', { name: 'Add File(s)' })).toBeVisible();
        await page.getByRole('tab', { name: 'Add File(s)' }).click()

        // await page.click("div[class='uppy-DashboardTab-name button button-3d button-xlarge']", { force: true })

        // Get the full page content

        await page.waitForTimeout(500000)

        //after uploading files I will verify the uploaded file name


        await browser.close()
    })
})