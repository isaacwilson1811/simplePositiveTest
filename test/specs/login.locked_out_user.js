import HomePage from '../pageobjects/homepage.js'

const userName = 'locked_out_user'
const password = 'secret_sauce'
const wrongPassword = 'incorrect_password'

// Positive Login
describe('Log in as locked_out_user', () => {
    it('Should get Locked out Error', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, password)
        await HomePage.verifyErrorLockedOut()
    })
})

// Negative Login
describe('Log in as locked_out_user with incorrect_password', () => {
    it('Should get No Match Error', async () => {
        await HomePage.navigateToPage()
        await HomePage.login(userName, wrongPassword)
        await HomePage.verifyErrorNoMatch()
    })
})