import HomePage from '../pageobjects/homepage.js'
import Inventory from '../pageobjects/inventory.js'

// Positive Login
describe('Log in as standard user', () => {
    it('Should log in succesfully', async () => {
        await HomePage.navigateToPage()
        await HomePage.login('standard_user','secret_sauce')
        await Inventory.verifyLoggedIn()
    })
})

// Negative Login
describe('Log in as standard user', () => {
    it('Should log in succesfully', async () => {
        await HomePage.navigateToPage()
        await HomePage.login('standard_user','incorrect_password')
        await Inventory.navigateToPage()
        // Add and use a method in page object inventory to expect navigating to inventory to fail
    })
})