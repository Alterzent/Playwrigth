export interface IPage {
  navigate(url?: string): Promise<void>;
  isLoaded(): Promise<boolean>;
  getTitle(): Promise<string>;
}

export interface ILoginPage extends IPage {
  login(username: string, password: string): Promise<void>;
  getErrorMessage(): Promise<string | null>;
  isErrorVisible(): Promise<boolean>;
  clearFields(): Promise<void>;
}

export interface IProductsPage extends IPage {
  getProductCount(): Promise<number>;
  addProductToCart(productName: string): Promise<void>;
  getCartItemCount(): Promise<number>;
  openCart(): Promise<void>;
  logout(): Promise<void>;
}

export interface IBrowserManager {
  launchBrowser(options?: BrowserLaunchOptions): Promise<void>;
  createContext(options?: BrowserContextOptions): Promise<void>;
  createPage(): Promise<void>;
  closeBrowser(): Promise<void>;
  getCurrentPage(): any;
  takeScreenshot(name: string): Promise<void>;
}

export interface ITestContext {
  browser: any;
  context: any;
  page: any;
  browserManager: IBrowserManager;
}

export interface BrowserLaunchOptions {
  headless?: boolean;
  slowMo?: number;
  devtools?: boolean;
}

export interface BrowserContextOptions {
  viewport?: { width: number; height: number };
  recordVideo?: {
    dir: string;
    size?: { width: number; height: number };
  };
}