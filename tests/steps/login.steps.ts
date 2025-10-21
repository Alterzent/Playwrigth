import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TestWorld } from '../hooks';
import { PageFactory } from '../../src/utils/TestHelpers';
import { ValidationUtils } from '../../src/utils/CommonUtils';

Given('I navigate to the login page', async function (this: TestWorld) {
  const loginPage = PageFactory.createLoginPage(this.page);
  await loginPage.navigate();

  const isLoaded = await loginPage.isLoaded();
  expect(isLoaded).toBeTruthy();
});

When(
  'I login with username {string} and password {string}',
  async function (this: TestWorld, username: string, password: string) {
    const loginPage = PageFactory.createLoginPage(this.page);
    await loginPage.login(username, password);
  }
);

Then(
  'I should be redirected to the products page',
  async function (this: TestWorld) {
    await expect(this.page).toHaveURL(/.*inventory.html/);

    const productsPage = PageFactory.createProductsPage(this.page);
    const isLoaded = await productsPage.isLoaded();
    expect(isLoaded).toBeTruthy();
  }
);

Then('I should see the products title', async function (this: TestWorld) {
  const productsPage = PageFactory.createProductsPage(this.page);
  const title = await productsPage.getTitle();
  expect(title).toContain('Swag Labs');
});

Then('I should see an error message', async function (this: TestWorld) {
  const loginPage = PageFactory.createLoginPage(this.page);
  const isErrorVisible = await loginPage.isErrorVisible();
  expect(isErrorVisible).toBeTruthy();

  const errorMessage = await loginPage.getErrorMessage();
  expect(ValidationUtils.isNotEmpty(errorMessage)).toBeTruthy();
  expect(errorMessage).toContain('Epic sadface');
});

Then(
  'I should see an error message containing {string}',
  async function (this: TestWorld, expectedText: string) {
    const loginPage = PageFactory.createLoginPage(this.page);
    const errorMessage = await loginPage.getErrorMessage();

    expect(ValidationUtils.isNotEmpty(errorMessage)).toBeTruthy();
    expect(errorMessage).toContain(expectedText);
  }
);

Then('I should remain on the login page', async function (this: TestWorld) {
  await expect(this.page).toHaveURL(/.*saucedemo.com\/?$/);

  const loginPage = PageFactory.createLoginPage(this.page);
  const isLoaded = await loginPage.isLoaded();
  expect(isLoaded).toBeTruthy();
});
