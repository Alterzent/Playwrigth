import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setWorldConstructor,
} from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
}

setWorldConstructor(CustomWorld);

BeforeAll(async function () {
  // Se ejecuta una vez antes de todos los escenarios
});

Before(async function () {
  // Configurar el navegador antes de cada escenario
  this.browser = await chromium.launch({
    headless: process.env.HEADLESS === 'true' || false,
    slowMo: 500,
  });

  this.context = await this.browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: './test-results/videos/',
      size: { width: 1280, height: 720 },
    },
  });

  this.page = await this.context.newPage();
});

After(async function (scenario) {
  // Capturar screenshot si el escenario falla
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot({
      path: `./test-results/screenshots/${scenario.pickle.name}.png`,
      fullPage: true,
    });

    // Adjuntar screenshot al reporte
    this.attach(screenshot, 'image/png');
  }

  // Cerrar navegador después de cada escenario
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});

AfterAll(async function () {
  // Limpiar después de todos los escenarios
});

export { CustomWorld };
