import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Saving the cart after logout', () => {
   it('should add item to cart, logout, and verify cart is saved after login', async () => {
      await LoginPage.open();
      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
      expect(passwordFieldType).toEqual('password');      
      await LoginPage.login('standard_user', 'secret_sauce');
      expect(InventoryPage.shoppingCartBtn.toBeDisplayed());
      expect(InventoryPage.inventoryContainer.toBeDisplayed());

      const expectedItemTitle = await (InventoryPage.secondItemTitle).getText()
      await InventoryPage.addToCartSecondItem.click();
      await expect(InventoryPage.cartBadge).toHaveText('1');

      expect((InventoryPage.menuItems).toBeDisplayed());
      await InventoryPage.menuButton.click();
      expect((InventoryPage.menuItems[0]).toBeDisplayed());
      expect(InventoryPage.verifyMenuItemsCount(4));

      await InventoryPage.logoutButton.click();
      expect((LoginPage.loginPage.toBeDisplayed()));
      await expect(LoginPage.username).toHaveValue('');
      await expect(LoginPage.password).toHaveValue('');

      await LoginPage.login('standard_user', 'secret_sauce');
      expect(InventoryPage.shoppingCartBtn.toBeDisplayed());
      expect(InventoryPage.inventoryContainer.toBeDisplayed());

      expect(InventoryPage.cartBadge).toHaveText('1');
      await InventoryPage.shoppingCartBtn.click();
      expect(CartPage.cartContainer.toBeDisplayed());

      const cartItemTitle = await (CartPage.itemTitle).getText();
      await expect(cartItemTitle).toEqual(expectedItemTitle);  
   });
});
