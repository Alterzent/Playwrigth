export class TestConfig {
  private static instance: TestConfig;

  private readonly config = {
    baseUrl: 'https://www.saucedemo.com/',
    timeout: 30000,
    viewport: { width: 1280, height: 720 },
    browsers: {
      chromium: { headless: false, slowMo: 500 },
      firefox: { headless: false, slowMo: 500 },
      webkit: { headless: false, slowMo: 500 },
    },
    reporting: {
      screenshotPath: './test-results/screenshots/',
      videoPath: './test-results/videos/',
      reportPath: './reports/',
    },
  };

  private constructor() {}

  public static getInstance(): TestConfig {
    if (!TestConfig.instance) {
      TestConfig.instance = new TestConfig();
    }
    return TestConfig.instance;
  }

  public getBaseUrl(): string {
    return this.config.baseUrl;
  }

  public getTimeout(): number {
    return this.config.timeout;
  }

  public getViewport() {
    return this.config.viewport;
  }

  public getBrowserConfig(browserName: string) {
    return this.config.browsers[
      browserName as keyof typeof this.config.browsers
    ];
  }

  public getReportingConfig() {
    return this.config.reporting;
  }

  public isHeadless(): boolean {
    return process.env.HEADLESS === 'true';
  }
}
