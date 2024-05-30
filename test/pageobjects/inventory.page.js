class InventoryPage {
      get inventoryContainer() { return $('.inventory_container'); }
      get menuButton() { return $('#react-burger-menu-btn'); }
      get logoutButton() { return $('#logout_sidebar_link'); }
      //get addToCartButton() { return $('#add-to-cart-sauce-labs-bike-light'); }
      
      async addItemToCart() {
            await this.addToCartButton.click();
      }

      async checkContainer() {
            await this.inventoryContainer.waitForDisplayed();
      }

      async openMenu() {
            await this.menuButton.waitForDisplayed();
            await this.menuButton.click();
      }

      async logout() {
            await this.openMenu();
            await this.logoutButton.waitForDisplayed();
            await this.logoutButton.click();
      }
}

export default new InventoryPage();
