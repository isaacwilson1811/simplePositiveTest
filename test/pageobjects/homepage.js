import { $ } from '@wdio/globals'
import Base from './base.js'

class HomePage extends Base {

    get inputUsername () {
        return $('//input[@data-test="username"]')
    }
    get inputPassword () {
        return $('//input[@data-test="password"]')
    }
    get inputLoginButton () {
        return $('//input[@data-test="login-button"]')
    }
    get elementErrorNoMatch () {
        return $('//*[@data-test="error"][contains(text(),"Username and password do not match")]')
    }
    get elementErrorLockedOut () {
        return $('//*[@data-test="error"][contains(text(),"Sorry, this user has been locked out")]')
    }

    navigateToPage () {
        return super.navigateTo('')
    }

    async verifyNotLoggedIn () {
        await expect(this.inputLoginButton).toBeExisting()
    }

    async verifyErrorNoMatch () {
        await expect(this.elementErrorNoMatch).toBeExisting()
    }

    async verifyErrorLockedOut () {
        await expect(this.elementErrorLockedOut).toBeExisting()
    }

    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.inputLoginButton.click()
    }

}

export default new HomePage()