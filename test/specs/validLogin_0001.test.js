import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Login', () => {
   it('should login with valid credentials', async () => {
      await LoginPage.open();
      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
      expect(passwordFieldType).toEqual('password');      
      await LoginPage.login(process.env.SAUCEDEMO_USERNAME, process.env.SAUCEDEMO_PASSWORD);
            
      expect(InventoryPage.shoppingCartBtn.toBeDisplayed());
      expect(InventoryPage.inventoryContainer.toBeDisplayed());
   });
});
