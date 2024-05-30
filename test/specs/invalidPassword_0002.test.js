//import { expect } from '@wdio/globals'
//import LoginPage from '../pageobjects/login.page.js'

//describe('Negative Test: Login with Invalid Password', () => {
//   it('should display error message and highlight fields with invalid password', async () => {

//      await LoginPage.open();
//      await LoginPage.login('standard_user', 'wrong_password');

//      await LoginPage.waitForErrorMessage();
//      await LoginPage.waitForErrorIcons();

//      // Validate highlighting and icons
//      expect(LoginPage.expectErrorMessage('Epic sadface: Username and password do not match any user in this service'));
//      expect(LoginPage.username).toHaveAttribute('class', expect.stringContaining('error'));
//      expect(LoginPage.password).toHaveAttribute('class', expect.stringContaining('error'));
//      expect(LoginPage.waitForErrorIcons());
//   });
//});
