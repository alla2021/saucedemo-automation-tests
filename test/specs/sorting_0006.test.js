import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting options', () => {
   it('should sort products according to chosen sorting options', async () => {
      await LoginPage.open();
      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
      expect(passwordFieldType).toEqual('password');      
      await LoginPage.login(process.env.SAUCEDEMO_USERNAME, process.env.SAUCEDEMO_PASSWORD);

      const sortingOptions = [
         { value: 'lohi', label: 'Price (low to high)' },
         { value: 'hilo', label: 'Price (high to low)' },
         { value: 'az', label: 'Name (A to Z)' },
         { value: 'za', label: 'Name (Z to A)' }
      ];

      for (const option of sortingOptions) {
         await InventoryPage.chooseSortingOption(option.value);

         const sortedPrices = await InventoryPage.getProductPrices();
         const sortedNames = await InventoryPage.getProductNames();

         let expectedPrices, expectedNames;
         if (option.value === 'lohi' || option.value === 'hilo') {
            expectedPrices = await InventoryPage.sortProducts(sortedPrices, option.value);
            expectedNames = sortedNames; 
         } else {
            expectedPrices = sortedPrices; 
            expectedNames = await InventoryPage.sortProducts(sortedNames, option.value);
         }

         expect(sortedPrices).toEqual(expectedPrices);
         expect(sortedNames).toEqual(expectedNames);

         break;
      }
   });
});
