import { Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameField = '[data-test="username"]';
  private readonly passwordField = '[data-test="password"]';
  private readonly loginButton = '[data-test="login-button"]';
  private readonly errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    return this.page.textContent(this.errorMessage);
  }

  async isErrorMessageVisible() {
    return this.page.isVisible(this.errorMessage);
  }

  async clearFields() {
    await this.page.fill(this.usernameField, '');
    await this.page.fill(this.passwordField, '');
  }
}
