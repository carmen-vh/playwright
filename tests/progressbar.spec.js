import { test, expect } from '@playwright/test'
import { ProgressbarPage } from '../models/progressbar.model'

test("Progress to 75", async ({ page }) => {
    const progressBarPage = new ProgressbarPage(page);
    await progressBarPage.navigateToProgressbarPage();
    await progressBarPage.clickButtonStart();
   
    while (await progressBarPage.getProgressValue() !== "75%") {
        console.log(await progressBarPage.getProgressValue());
    }

    await progressBarPage.clickButtonStop();

})