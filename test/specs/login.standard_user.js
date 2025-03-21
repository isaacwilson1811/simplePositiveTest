import HomePage from '../pageobjects/homepage.js'
import Inventory from '../pageobjects/inventory.js'

const userName = 'standard_user'
const password = 'secret_sauce'
const wrongPassword = 'incorrect_password'

// Positive Login
describe('Log in as standard_user', () => {
    it('Should log in succesfully', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, password)
        await Inventory.verifyLoggedIn()
    })
})

// Log out
describe('Log out from standard_user', () => {
    it('Should log out succesfully', async () => {
        await Inventory.logOut()
        await HomePage.verifyNotLoggedIn()
    })
})

// Negative Login
describe('Log in as standard_user with incorrect_password', () => {
    it('Should get No Match Error', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, wrongPassword)
        await HomePage.verifyErrorNoMatch()
    })
})