import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { IProductsPage } from '../interfaces';

export class ProductsPage extends BasePage implements IProductsPage {
  protected url = 'inventory.html';

  private readonly selectors = {
    title: '.title',
    inventoryList: '.inventory_list',
    inventoryItem: '.inventory_item',
    cartButton: '.shopping_cart_link',
    cartBadge: '.shopping_cart_badge',
    hamburgerMenu: '#react-burger-menu-btn',
    logoutLink: '#logout_sidebar_link',
  };

  constructor(page: Page) {
    super(page);
  }

  public async isLoaded(): Promise<boolean> {
    return await this.isElementVisible(this.selectors.inventoryList);
  }

  public async getProductCount(): Promise<number> {
    return await this.page.locator(this.selectors.inventoryItem).count();
  }

  public async addProductToCart(productName: string): Promise<void> {
    const productSelector = `[data-test="add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}"]`;
    await this.clickElement(productSelector);
  }

  public async getCartItemCount(): Promise<number> {
    if (await this.isElementVisible(this.selectors.cartBadge)) {
      const badgeText = await this.getElementText(this.selectors.cartBadge);
      return parseInt(badgeText || '0');
    }
    return 0;
  }

  public async openCart(): Promise<void> {
    await this.clickElement(this.selectors.cartButton);
  }

  public async logout(): Promise<void> {
    await this.clickElement(this.selectors.hamburgerMenu);
    await this.waitForElement(this.selectors.logoutLink);
    await this.clickElement(this.selectors.logoutLink);
  }
}
