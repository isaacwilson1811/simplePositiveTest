import HomePage from '../pageobjects/homepage.js'
import Inventory from '../pageobjects/inventory.js'

describe('Log in as standard user', () => {
    it('Should log in succesfully', async () => {
        await HomePage.navigateToPage()
        await HomePage.login('standard_user','secret_sauce')

        
        await Inventory.verifyLoggedIn()
        await Inventory.navigateToPage()
    })
})