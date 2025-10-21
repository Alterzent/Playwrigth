import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { Page } from '@playwright/test';

export class PageFactory {
  public static createLoginPage(page: Page): LoginPage {
    return new LoginPage(page);
  }

  public static createProductsPage(page: Page): ProductsPage {
    return new ProductsPage(page);
  }
}

export class TestDataProvider {
  public static getValidCredentials() {
    return {
      username: 'standard_user',
      password: 'secret_sauce'
    };
  }

  public static getLockedUserCredentials() {
    return {
      username: 'locked_out_user',
      password: 'secret_sauce'
    };
  }

  public static getProblemUserCredentials() {
    return {
      username: 'problem_user',
      password: 'secret_sauce'
    };
  }

  public static getInvalidCredentials() {
    return [
      { username: 'invalid_user', password: 'secret_sauce' },
      { username: 'standard_user', password: 'wrong_pass' },
      { username: 'empty_user', password: '' },
      { username: '', password: 'secret_sauce' }
    ];
  }
}