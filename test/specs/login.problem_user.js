import HomePage from '../pageobjects/homepage.js'
import Inventory from '../pageobjects/inventory.js'

const userName = 'problem_user'
const password = 'secret_sauce'
const wrongPassword = 'incorrect_password'

// Positive Login
describe('Log in as problem_user', () => {
    it('Should log in succesfully, and see 6 dog images', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, password)
        await Inventory.verifyLoggedIn()
        await Inventory.verifyProblemImages(6)
    })
})

// Log out
describe('Log out from problem_user', () => {
    it('Should log out succesfully', async () => {
        await Inventory.logOut()
        await HomePage.verifyNotLoggedIn()
    })
})

// Negative Login
describe('Log in as problem_user with incorrect_password', () => {
    it('Should get No Match Error', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, wrongPassword)
        await HomePage.verifyErrorNoMatch()
    })
})