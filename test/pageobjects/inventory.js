import { $, browser } from '@wdio/globals'
import Base from './base.js'
import { expect } from '@wdio/globals'

class Inventory extends Base {
    get spanProducts () {
        return $('//span[@data-test="title"][contains(text(),"Products")]')
    }

    navigateToPage () {
        return super.navigateTo('inventory')
    }

    async verifyLoggedIn () {
        await expect(this.spanProducts).toBeExisting()
    }

}

export default new Inventory()