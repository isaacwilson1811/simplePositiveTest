import HomePage from '../pageobjects/homepage.js'
import Inventory from '../pageobjects/inventory.js'

const userName = 'performance_glitch_user'
const password = 'secret_sauce'
const wrongPassword = 'incorrect_password'

// Positive Login
describe('Log in as performance_glitch_user', () => {
    it('Should log in succesfully after a delay', async () => {
        await HomePage.navigateToPage()
        const startTime = Date.now()
        await HomePage.login(userName, password)
        await Inventory.verifyLoggedIn()
        const elapsedTime = Date.now() - startTime
        console.log(`Time it took to log in: ${elapsedTime}`)
        await Inventory.verifyDelay(elapsedTime, 3000)
    })
})

// Log out
describe('Log out from performance_glitch_user', () => {
    it('Should log out succesfully', async () => {
        await Inventory.logOut()
        await HomePage.verifyNotLoggedIn()
    })
})

// Negative Login
describe('Log in as performance_glitch_user with incorrect_password', () => {
    it('Should get No Match Error', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, wrongPassword)
        await HomePage.verifyErrorNoMatch()
    })
})