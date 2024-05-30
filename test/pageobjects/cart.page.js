class CartPage {
   get cartContainer() { return $('.cart_container'); }
   get cartItem() { return $('.cart_item'); }
   get checkoutButton() { return $('.checkout_button'); }
   
   async checkCart() {
      await this.cartContainer.waitForDisplayed();
   }

   async checkout() {
      await this.checkoutButton.click();
   }
}

export default new CartPage();
