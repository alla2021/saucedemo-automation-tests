import { browser } from '@wdio/globals'

export default class Page {
    get username() { return $('[name="user-name"]') }
    get password() { return $('[name="password"]') }
    
    async verifyFieldsAreEmpty() {
        await this.username.getValue().toBe('');
        await this.password.getValue().toBe('');
    }
    
    open (path) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
