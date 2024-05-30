//import { expect } from '@wdio/globals'
//import LoginPage from '../pageobjects/login.page.js'

//describe('Negative Test: Login with Invalid Username', () => {
//   it('should display error message and highlight fields with invalid Username', async () => {

//      await LoginPage.open();
//      await LoginPage.login('standarD_user', 'secret_sauce');

//      await LoginPage.waitForErrorMessage();
//      await LoginPage.waitForErrorIcons();

//      const errorMessageText = await LoginPage.getErrorMessageText();
//      const loginField = await LoginPage.username;
//      const passwordField = await LoginPage.password;

//      // Validate highlighting and icons
//      await expect(errorMessageText).toContain('Epic sadface: Username and password do not match any user in this service');
//      await expect(loginField).toHaveAttribute('class', expect.stringContaining('error'));
//      await expect(passwordField).toHaveAttribute('class', expect.stringContaining('error'));
//      await expect(LoginPage.errorIcons[0]).toBeDisplayed();
//      await expect(LoginPage.errorIcons[1]).toBeDisplayed();
//   });
//});
