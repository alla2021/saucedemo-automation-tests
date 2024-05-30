//import { expect } from '@wdio/globals';
//import LoginPage from '../pageobjects/login.page.js';
//import InventoryPage from '../pageobjects/inventory.page.js';
//import CartPage from '../pageobjects/cart.page.js';

//describe('Saving the cart after logout', () => {
//   it('should add item to cart, logout, and verify cart is saved after login', async () => {
      
//      await LoginPage.open();
//      await LoginPage.login('standard_user', 'secret_sauce');
//      //step 1
//      await InventoryPage.checkContainer();
//      await InventoryPage.addItemToCart();
//      await expect(InventoryPage.cartBadge).toHaveText('1');
//      await browser.pause(2000)
//      ////step 2
//      await InventoryPage.openMenu();
//      await browser.pause(2000)
//      await expect(InventoryPage.verifyMenuItemsCount(4));
//      await browser.pause(2000)
//      ////step 3
//      await InventoryPage.logout();


      //await LoginPage.verifyFieldsAreEmpty();
      //await browser.pause(2000)
      //await LoginPage.login('standard_user', 'secret_sauce');
      //await InventoryPage.checkContainer();
      //await browser.pause(2000)
      //await CartPage.checkCart();
      //await expect(InventoryPage.cartBadge).toHaveText('1');
      //await CartPage.checkout();

      //const cartItem = await CartPage.cartItem;
      //await expect(cartItem).toBeDisplayed();
//   });
//});
