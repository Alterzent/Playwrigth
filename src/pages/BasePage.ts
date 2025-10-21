import { Page, expect } from '@playwright/test';
import { IPage } from '../interfaces';
import { TestConfig } from '../core/TestConfig';

export abstract class BasePage implements IPage {
  protected page: Page;
  protected config: TestConfig;
  protected abstract url: string;

  constructor(page: Page) {
    this.page = page;
    this.config = TestConfig.getInstance();
  }

  public async navigate(url?: string): Promise<void> {
    const targetUrl = url || this.getFullUrl();
    await this.page.goto(targetUrl);
    await this.waitForPageLoad();
  }

  public abstract isLoaded(): Promise<boolean>;

  public async getTitle(): Promise<string> {
    return await this.page.title();
  }

  protected getFullUrl(): string {
    return `${this.config.getBaseUrl()}${this.url}`;
  }

  protected async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  protected async waitForElement(selector: string, timeout?: number): Promise<void> {
    await this.page.waitForSelector(selector, { 
      timeout: timeout || this.config.getTimeout() 
    });
  }

  protected async isElementVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

  protected async getElementText(selector: string): Promise<string | null> {
    return await this.page.textContent(selector);
  }

  protected async clickElement(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  protected async fillElement(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }
}