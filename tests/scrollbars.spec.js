import { test } from '@playwright/test'
import { ScrollbarsPage } from '../models/scroll-bars.model'

test('Click Button', async ({ page }) => {
    await page.pause();
    const scrollbar = new ScrollbarsPage(page);
    await scrollbar.navigateToScrollbar();
    await scrollbar.clickButton();
})