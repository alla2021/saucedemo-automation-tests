import Page from './page.js';

class LoginPage extends Page {
    get username() { return $('[name="user-name"]') }
    get password() { return $('[name="password"]') }
    get loginButton() { return $('#login-button') }
    get loginPage() { return $('.login_container') }
    get errorMessage() { return $('.error-message-container') }
    get errorIcons() { return $$('.error_icon') }

    async verifyFieldsAreEmpty() {
        await this.username.getValue().toBe('');
        await this.password.getValue().toBe('');
    }
    
    async verifyPasswordFieldType() {
        return await this.password.getAttribute('type');
    }

    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.verifyPasswordFieldType();
        await this.loginButton.click();
    }

    async getErrorMessageText() {
        return this.errorMessage.getText();
    }

    async expectErrorMessage(errorMessage) {
        return await this.getErrorMessageText().toContain(errorMessage);    
    }

    open () {
        return super.open('');
    }
}

export default new LoginPage();
