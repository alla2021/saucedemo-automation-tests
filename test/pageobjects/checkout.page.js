class CheckoutPage {
   get checkoutContainer() { return $('.checkout_info'); }
   get finishBtn() { return $('#finish'); }
   get backToProductsPageBtn() { return $('#back-to-products'); }

   get itemTitle() { return $('#item_0_title_link div'); }
   get itemPrice() {return $('.inventory_item_price'); }
   get totalPrice() { return $('.summary_subtotal_label'); }

   get finishTitle() { return $('.complete-header'); }

   async getMessageText() {
      return this.message.getText();
   }

   async expectMessage(message) {
      return await this.getMessageText().toContain(message);    
   }
}

export default new CheckoutPage();
