//import { expect } from '@wdio/globals';
//import LoginPage from '../pageobjects/login.page.js';
//import InventoryPage from '../pageobjects/inventory.page.js';

//describe('Logout application', () => {
//   it('should logout successfully and redirect to login page', async () => {
//      await LoginPage.open();
//      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
//      expect(passwordFieldType).toEqual('password');      
//      await LoginPage.login('standard_user', 'secret_sauce');

//      expect(InventoryPage.shoppingCartBtn.waitForDisplayed());
//      expect(InventoryPage.inventoryContainer.waitForDisplayed());
//      expect((InventoryPage.menuItems).toBeDisplayed())
//      await InventoryPage.menuButton.click();
//      expect((InventoryPage.menuItems[0]).waitForDisplayed());
//      await InventoryPage.verifyMenuItemsCount(4);
//      await InventoryPage.logoutButton.click();
//      expect((LoginPage.loginPage.toBeDisplayed()));
//      await expect(LoginPage.username).toHaveValue('');
//      await expect(LoginPage.password).toHaveValue('');
//   });
//});




