//import { test } from '@playwright/test';
const { test,expect } = require('@playwright/test');
//import { HomePage } from '../models/home-page.model'
const { HomePage } = require('../models/home-page.model');

test("Navigate to Home Page", async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.navigateToHomePage()
    let allLinks = await homePage.getAllLinkTags();     // array
    console.log(allLinks.length);
    console.log(allLinks.indexOf("Click"));
    console.log(allLinks[11]);
    await expect(allLinks.indexOf("Click")).toBe(11)
}) 

