import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('Checkout without products', () => {
   it('should display an error message when trying to checkout without products', async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user', 'secret_sauce');
      
      expect(InventoryPage.shoppingCartBtn.toBeDisplayed());
      expect(InventoryPage.inventoryContainer.toBeDisplayed());
      await expect(InventoryPage.cartBadge).not.toBeDisplayed();

      await InventoryPage.shoppingCartBtn.click();
      await CartPage.checkoutButton.click();
      
      await expect(CheckoutPage.expectMessage).toHaveText('Cart is empty'); 
   });
});
