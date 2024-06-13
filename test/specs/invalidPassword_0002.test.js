import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Negative Test: Login with Invalid Password', () => {
   it('should display error message and highlight fields with invalid password', async () => {
      await LoginPage.open();
      const passwordFieldType = await LoginPage.verifyPasswordFieldType();
      expect(passwordFieldType).toEqual('password');      
      await LoginPage.login(process.env.SAUCEDEMO_USERNAME, process.env.NEGATIVE_PASSWORD);

      expect(LoginPage.errorMessage.toBeDisplayed());

      expect((LoginPage.errorIcons[0]).toBeDisplayed());
      expect((LoginPage.errorIcons[1]).toBeDisplayed());
      expect(LoginPage.expectErrorMessage('Epic sadface: Username and password do not match any user in this service'));
      expect(LoginPage.username).toHaveAttribute('class', expect.stringContaining('error'));
      expect(LoginPage.password).toHaveAttribute('class', expect.stringContaining('error'));
   });
});
