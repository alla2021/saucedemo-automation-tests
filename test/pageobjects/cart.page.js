class CartPage {
   get cartContainer() { return $('.cart_container'); }
   get cartItems() { return $$('.cart_item'); }
   get checkoutButton() { return $('.checkout_button'); }
   get itemTitle() { return $('#item_0_title_link div'); }
   get continueButton() { return $('#continue'); }

   async fillOutCheckoutInformation(firstName, lastName, zipCode) {
      await $('#first-name').setValue(firstName);
      await $('#last-name').setValue(lastName);
      await $('#postal-code').setValue(zipCode);
   }

}

export default new CartPage();
