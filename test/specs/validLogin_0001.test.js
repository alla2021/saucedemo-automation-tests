import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('My Login application', () => {
   it('should login with valid credentials', async () => {
      await LoginPage.open();
      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
      expect(passwordFieldType).toEqual('password');      
      await LoginPage.login('standard_user', 'secret_sauce');
            
      expect(InventoryPage.shoppingCartBtn.toBeDisplayed());
      expect(InventoryPage.inventoryContainer.toBeDisplayed());
   });
});
