import { $, browser } from '@wdio/globals'
import Base from './base.js'
import { expect } from '@wdio/globals'

class Inventory extends Base {
    get spanProducts () {
        return $('//span[@data-test="title"][contains(text(),"Products")]')
    }
    get buttonMenu () {
        return $('//button[contains(text(),"Open Menu")]')
    }
    get linkLogout () {
        return $('//a[@data-test="logout-sidebar-link"]')
    }

    navigateToPage () {
        return super.navigateTo('inventory')
    }

    async verifyLoggedIn () {
        await expect(this.spanProducts).toBeExisting()
    }

    async logOut () {
        await this.buttonMenu.click()
        await this.linkLogout.click()
    }

}

export default new Inventory()