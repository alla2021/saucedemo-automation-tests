import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Footer Links', () => {
   it('should open Twitter, Facebook, and LinkedIn pages in new tabs', async () => {
      await LoginPage.open();
      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
      expect(passwordFieldType).toEqual('password');      
      await LoginPage.login('standard_user', 'secret_sauce');
      expect(InventoryPage.footer.toBeDisplayed());

      await InventoryPage.twitterLink.click();
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[1]);
      await expect(browser).toHaveUrl(expect.stringContaining('twitter.com'));
      await browser.closeWindow();
      await browser.switchToWindow(handles[0]);

      await InventoryPage.facebookLink.click();
      const fbHandles = await browser.getWindowHandles();
      await browser.switchToWindow(fbHandles[1]);
      await expect(browser).toHaveUrl(expect.stringContaining('facebook.com'));
      await browser.closeWindow();
      await browser.switchToWindow(fbHandles[0]);

      await InventoryPage.linkedinLink.click();
      const linkedinHandles = await browser.getWindowHandles();
      await browser.switchToWindow(linkedinHandles[1]);
      await expect(browser).toHaveUrl(expect.stringContaining('linkedin.com'));
      await browser.closeWindow();
      await browser.switchToWindow(linkedinHandles[0]);
   });
});

