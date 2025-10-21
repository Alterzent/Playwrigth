import { Before, After, BeforeAll, AfterAll, setWorldConstructor } from '@cucumber/cucumber';
import { ITestContext } from '../src/interfaces';
import { BrowserManager } from '../src/core/BrowserManager';
import { StringUtils } from '../src/utils/CommonUtils';

class TestWorld implements ITestContext {
  public browser: any;
  public context: any;
  public page: any;
  public browserManager: BrowserManager;

  constructor() {
    this.browserManager = new BrowserManager();
  }
}

setWorldConstructor(TestWorld);

BeforeAll(async () => {
  console.log('Starting test suite execution');
});

Before(async function () {
  await this.browserManager.launchBrowser();
  await this.browserManager.createContext();
  await this.browserManager.createPage();

  this.page = this.browserManager.getCurrentPage();
});

After(async function (scenario: any) {
  if (scenario.result?.status === 'FAILED') {
    const screenshotName = `${StringUtils.sanitizeFilename(scenario.pickle.name)}_${StringUtils.generateTimestamp()}`;
    await this.browserManager.takeScreenshot(screenshotName);
  }

  await this.browserManager.closeBrowser();
});

AfterAll(async () => {
  console.log('Test suite execution completed');
});

export { TestWorld };