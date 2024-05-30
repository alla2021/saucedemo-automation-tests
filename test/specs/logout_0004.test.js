import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Logout application', () => {
   it('should logout successfully and redirect to login page', async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user', 'secret_sauce');

      await InventoryPage.verifyInventoryPageVisibility();
      await InventoryPage.logout();
      
      //expect(InventoryPage.inventoryContainer).not.toBeDisplayed();
      
      expect(LoginPage.loginContainer).toBeDisplayed();
   });
});




