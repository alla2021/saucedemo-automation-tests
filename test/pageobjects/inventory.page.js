import { $ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage extends Page {
      get inventoryContainer() { return $('.inventory_container'); }
      get menuButton() { return $('#react-burger-menu-btn'); }
      get logoutButton() { return $('#logout_sidebar_link'); }
      get addToCartButton() { return $('#add-to-cart-sauce-labs-bike-light'); }
      get shoppingCartBtn () { return $('.shopping-cart-link'); }
      get cartBadge () { return $('.shopping_cart_badge'); }
      get menuItems() { return $$('.bm-item'); }

      async verifyInventoryPageVisibility() {
            await this.inventoryContainer.waitForDisplayed();
            await this.shoppingCartBtn.waitForDisplayed();
      }

      async openMenu() {
            await this.menuButton.waitForDisplayed();
            await this.menuButton.click();
      }

      async logout() {
            await this.openMenu();
            await this.logoutButton.waitForDisplayed();
            await this.logoutButton.click();
            await this.verifyFieldsAreEmpty();
      }

      async verifyMenuItemsCount(expectedCount) {
            this.menuItems.toHaveLength(expectedCount);
      }

      async addItemToCart() {
            await this.addToCartButton.click();
      }
}

export default new InventoryPage();
