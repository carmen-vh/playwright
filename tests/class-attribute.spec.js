import { test } from '@playwright/test'
import { ClassAttributePage } from '../models/class-attribute.model'

test ("Clicking Blue Button", async ({ page }) => {
    //await page.pause() // pauses test execution and opens Playwright inspector for debugging
    // capturing dialogue message
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss() // whenever page sees dialog - grab message and dismiss
    })

    const classAttributePage = new ClassAttributePage(page);
    await classAttributePage.navigateToClassAttributePage();
    await classAttributePage.clickBlueButton();
    
})