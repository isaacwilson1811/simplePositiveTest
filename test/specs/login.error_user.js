import HomePage from '../pageobjects/homepage.js'
import Inventory from '../pageobjects/inventory.js'

const userName = 'error_user'
const password = 'secret_sauce'
const wrongPassword = 'incorrect_password'

// Positive Login
describe('Log in as error_user', () => {
    it('Should log in succesfully', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, password)
        await Inventory.verifyLoggedIn()
    })
})

// error_user can't remove item from cart
describe('Add item to cart. Attempt to remove item.', () => {
    it('Should get Uncaught Error: Failed to remove item from cart in browser console', async () => {
        await Inventory.buttonAddToCart.click()
        await Inventory.buttonRemoveFromCart.click()
        await Inventory.verifyRemoveItemError()
    })
})

// Log out
describe('Log out from error_user', () => {
    it('Should log out succesfully', async () => {
        await Inventory.logOut()
        await HomePage.verifyNotLoggedIn()
    })
})

// Negative Login
describe('Log in as error_user with incorrect_password', () => {
    it('Should get No Match Error', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, wrongPassword)
        await HomePage.verifyErrorNoMatch()
    })
})