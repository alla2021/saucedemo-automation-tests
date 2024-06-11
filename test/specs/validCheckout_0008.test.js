//import { expect } from '@wdio/globals';
//import LoginPage from '../pageobjects/login.page.js';
//import InventoryPage from '../pageobjects/inventory.page.js';
//import CartPage from '../pageobjects/cart.page.js';
//import CheckoutPage from '../pageobjects/checkout.page.js';

//describe('Valid Checkout', () => {
//   it('should successfully complete the checkout process', async () => {
//      await LoginPage.open();
//      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
//      expect(passwordFieldType).toEqual('password');      
//      await LoginPage.login('standard_user', 'secret_sauce');

//      expect(InventoryPage.shoppingCartBtn.waitForDisplayed());
//      expect(InventoryPage.inventoryContainer.waitForDisplayed());
//      await InventoryPage.addToCartSecondItem.click();
//      const expectedItemTitle =await (InventoryPage.secondItemTitle).getText()
//      let expectedItemPrice =await (InventoryPage.secondItemPrice[1]).getText()
//      await expect(InventoryPage.cartBadge).toHaveText('1');

//      await InventoryPage.shoppingCartBtn.click();  
//      const cartItems = await CartPage.cartItems;
//      expect(cartItems).toBeDisplayed();
//      const cartItemsCount = cartItems.length;
//      expect(cartItemsCount).toBe(1);
//      expect(CartPage.cartContainer).toBeDisplayed();
//      const cartItemTitle = await CartPage.itemTitle.getText();
//      await expect(cartItemTitle).toEqual(expectedItemTitle);

//      await CartPage.checkoutButton.click();

//      await CartPage.fillOutCheckoutInformation('Ryan', 'Gosling', 'Drive_2011');
      
//      await CartPage.continueButton.click();

//      const inventoryItemPriceText = await CheckoutPage.itemPrice.getText();
//      const summarySubtotalLabelText = await CheckoutPage.totalPrice.getText();

//      const inventoryItemPriceValue = extractNumericValue(inventoryItemPriceText);
//      const summarySubtotalLabelValue = extractNumericValue(summarySubtotalLabelText);
//      expectedItemPrice = extractNumericValue(expectedItemPrice);
      
//      function extractNumericValue(text) {
//         const numericPart = text.replace(/[^\d.]/g, ''); 
//         return parseFloat(numericPart); 
//      }

//      expect(inventoryItemPriceValue).toEqual(expectedItemPrice);
//      expect(summarySubtotalLabelValue).toEqual(expectedItemPrice);

//      await CheckoutPage.finishBtn.click();

//      expect(CheckoutPage.finishTitle.toBeDisplayed());
//      expect(CheckoutPage.finishTitle.getText()) 
//      expect(CheckoutPage.expectMessage('Thank you for your order!'));

//      await CheckoutPage.backToProductsPageBtn.click();
      
//      await expect(InventoryPage.cartBadge).not.toBeDisplayed();
//   });
//});
