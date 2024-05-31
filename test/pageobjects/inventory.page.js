import { $ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage extends Page {
      get inventoryContainer() { return $('.inventory_container'); }
      get menuButton() { return $('#react-burger-menu-btn'); }
      get logoutButton() { return $('#logout_sidebar_link'); }
      get addToCartSecondItem() { return $('#add-to-cart-sauce-labs-bike-light'); }
      get shoppingCartBtn () { return $('.shopping-cart-link'); }
      get cartBadge () { return $('.shopping_cart_badge'); }
      get menuItems() { return $$('.bm-item'); }

      async verifyMenuItemsCount(expectedCount) {
            this.menuItems.toHaveLength(expectedCount);
      }

}

export default new InventoryPage();
