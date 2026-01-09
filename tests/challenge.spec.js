import { test, expect } from '@playwright/test';
const { ChallengePage } = require("../models/challenge.model");

test('updating button', async ({ page }) => {
    const challenge = new ChallengePage(page);
    await challenge.NavigateToTextInput();
    await challenge.fillTextField("wololo");
    await challenge.clickButton();
    await challenge.expectedButtonText("wololo");
});