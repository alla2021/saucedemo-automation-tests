import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get username() { return $('[name="user-name"]') }
    get password() { return $('[name="password"]') }
    get loginButton() { return $('#login-button') }
    get loginPage() { return $('login_container') }
    get errorMessage() { return $('.error-message-container') }
    get errorIcons() { return $$('.error_icon') }

    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }

    async waitForErrorMessage() {
        await this.errorMessage.waitForDisplayed();
    }

    async waitForErrorIcons() {
        await this.errorIcons[0].waitForDisplayed();
        await this.errorIcons[1].waitForDisplayed();
    }

    async getErrorMessageText() {
        return this.errorMessage.getText();
    }

    async checkContainer() {
        await this.loginPage.waitForDisplayed();
    }

    open () {
        return super.open('');
    }
}

export default new LoginPage();
