import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import {
  IBrowserManager,
  BrowserLaunchOptions,
  BrowserContextOptions,
} from '../interfaces';
import { TestConfig } from './TestConfig';

export class BrowserManager implements IBrowserManager {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;
  private config: TestConfig;

  constructor() {
    this.config = TestConfig.getInstance();
  }

  public async launchBrowser(options?: BrowserLaunchOptions): Promise<void> {
    const browserType = process.env.BROWSER || 'chromium';
    const defaultOptions = this.config.getBrowserConfig(browserType);

    const launchOptions = {
      headless: this.config.isHeadless(),
      slowMo: defaultOptions?.slowMo || 0,
      ...options,
    };

    switch (browserType) {
      case 'firefox':
        this.browser = await firefox.launch(launchOptions);
        break;
      case 'webkit':
        this.browser = await webkit.launch(launchOptions);
        break;
      default:
        this.browser = await chromium.launch(launchOptions);
    }
  }

  public async createContext(options?: BrowserContextOptions): Promise<void> {
    if (!this.browser) {
      throw new Error('Browser must be launched before creating context');
    }

    const contextOptions = {
      viewport: this.config.getViewport(),
      recordVideo: {
        dir: this.config.getReportingConfig().videoPath,
        size: this.config.getViewport(),
      },
      ...options,
    };

    this.context = await this.browser.newContext(contextOptions);
  }

  public async createPage(): Promise<void> {
    if (!this.context) {
      throw new Error('Context must be created before creating page');
    }

    this.page = await this.context.newPage();
    await this.page.setDefaultTimeout(this.config.getTimeout());
  }

  public async closeBrowser(): Promise<void> {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();

    this.page = null;
    this.context = null;
    this.browser = null;
  }

  public getCurrentPage(): Page {
    if (!this.page) {
      throw new Error('Page not initialized. Call createPage() first.');
    }
    return this.page;
  }

  public async takeScreenshot(name: string): Promise<void> {
    if (!this.page) return;

    const screenshotPath = `${this.config.getReportingConfig().screenshotPath}${name}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
  }
}
