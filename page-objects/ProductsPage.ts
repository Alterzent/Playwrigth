import { Page } from '@playwright/test';

export class ProductsPage {
  private readonly page: Page;
  private readonly title = '.title';
  private readonly inventoryList = '.inventory_list';
  private readonly cartButton = '.shopping_cart_link';
  private readonly hamburgerMenu = '#react-burger-menu-btn';

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle() {
    return this.page.textContent(this.title);
  }

  async isInventoryVisible() {
    return this.page.isVisible(this.inventoryList);
  }

  async getProductCount() {
    return this.page.locator('.inventory_item').count();
  }

  async addProductToCart(productName: string) {
    const addButton = this.page.locator(
      `[data-test="add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}"]`
    );
    await addButton.click();
  }

  async getCartItemCount() {
    const cartBadge = this.page.locator('.shopping_cart_badge');
    if (await cartBadge.isVisible()) {
      return parseInt((await cartBadge.textContent()) || '0');
    }
    return 0;
  }

  async openCart() {
    await this.page.click(this.cartButton);
  }

  async logout() {
    await this.page.click(this.hamburgerMenu);
    await this.page.click('#logout_sidebar_link');
  }
}
