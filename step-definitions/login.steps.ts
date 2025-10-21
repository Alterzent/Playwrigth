import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { ProductsPage } from '../page-objects/ProductsPage';
import { CustomWorld } from '../config/hooks';

Given('I navigate to the login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('I should be redirected to the products page', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.page);
  await expect(this.page).toHaveURL(/.*inventory.html/);
});

Then('I should see the products title', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.page);
  const title = await productsPage.getTitle();
  expect(title).toContain('Products');
});

Then('I should see an error message', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBeTruthy();
  expect(errorMessage).toContain('Epic sadface');
});

Then('I should see an error message containing {string}', async function (this: CustomWorld, expectedText: string) {
  const loginPage = new LoginPage(this.page);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBeTruthy();
  expect(errorMessage).toContain(expectedText);
});

Then('I should remain on the login page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/.*saucedemo.com\/?$/);
  const loginButton = this.page.locator('[data-test="login-button"]');
  await expect(loginButton).toBeVisible();
});