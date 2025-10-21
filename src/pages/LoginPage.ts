import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ILoginPage } from '../interfaces';

export class LoginPage extends BasePage implements ILoginPage {
  protected url = '';

  private readonly selectors = {
    usernameField: '[data-test="username"]',
    passwordField: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
  };

  constructor(page: Page) {
    super(page);
  }

  public async isLoaded(): Promise<boolean> {
    return await this.isElementVisible(this.selectors.loginButton);
  }

  public async login(username: string, password: string): Promise<void> {
    await this.fillElement(this.selectors.usernameField, username);
    await this.fillElement(this.selectors.passwordField, password);
    await this.clickElement(this.selectors.loginButton);
  }

  public async getErrorMessage(): Promise<string | null> {
    if (await this.isErrorVisible()) {
      return await this.getElementText(this.selectors.errorMessage);
    }
    return null;
  }

  public async isErrorVisible(): Promise<boolean> {
    return await this.isElementVisible(this.selectors.errorMessage);
  }

  public async clearFields(): Promise<void> {
    await this.fillElement(this.selectors.usernameField, '');
    await this.fillElement(this.selectors.passwordField, '');
  }
}