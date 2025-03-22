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
    get imagesProblem () {
        // $$ selector returns an array of matches.
        // The bug that occurs (and is expected) with problem_user is
        // the same incorrect image of a dog being used for every single product.
        return $$('//div[@class="inventory_item_img"]//img[@src="/static/media/sl-404.168b1cce.jpg"]')
    }
    get buttonAddToCart () {
        return $('//button[@data-test="add-to-cart-sauce-labs-backpack"]')
    }
    get buttonRemoveFromCart () {
        return $('//button[@data-test="remove-sauce-labs-backpack"]')
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

    async verifyProblemImages () {
        let array = await this.imagesProblem
        // There are always 6 duplicate images. But one or more is expected.
        // await expect(array.length).toBeGreaterThanOrEqual(1)
        // await expect(array.length).toBeLessThanOrEqual(6)
        // Condense the above into one expect
        await expect(array.length >= 1 && array.length <= 6).toBe(true)
    }

    async verifyDelay (elapsedTime, expectedTime) {
        // Verify there is a delay after submitting login for performance glitch user
        await expect(elapsedTime).toBeGreaterThanOrEqual(expectedTime)
    }

    async verifyRemoveItemError () {
        const logs = await browser.getLogs('browser')
        const expectedError = 'Uncaught Error: Failed to remove item from cart'
        const errorLogs = logs.filter(log => log.level === 'SEVERE' && log.message.includes(expectedError))
        await expect(errorLogs.length).toBeGreaterThan(0)
    }

}

export default new Inventory()