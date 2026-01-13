import { test, expect } from '@playwright/test';
import { SampleAppPage } from '../models/sample-app.model'; // import sample app model

test('log in success', async ({ page }) => {
  // await page.goto('http://uitestingplayground.com/');
  // await page.getByRole('link', { name: 'Sample App' }).click();   
  // await page.getByPlaceholder('textbox', { name: 'User Name' }).fill('Jon');
  // await page.getByPlaceholder('textbox', { name: '********' }).fill('pwd');
  // await page.getByRole('button', { name: 'Log In' }).click();
  const sampleAppPage = new SampleAppPage(page) // new instance
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField('Jon Snow')
  await sampleAppPage.fillPasswordField('pwd')
  await sampleAppPage.clickLoginButton()
  //assertion
  await sampleAppPage.expectedLoginTextToBe("Welcome, Jon Snow!")
});

test('Wrong password test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage()
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField('Jon Snow')
  await sampleAppPage.fillPasswordField('wrong')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
});

test('No username test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage()
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField('')
  await sampleAppPage.fillPasswordField('pwd')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
});

test('Log out test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage()
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField('Jon Snow')
  await sampleAppPage.fillPasswordField('pwd')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Welcome, Jon Snow!")
  await sampleAppPage.clickLogoutButton()
  await sampleAppPage.expectedLoginTextToBe("User logged out.")
});