
import login from './login.js'
const userName = Cypress.env("userName");
const pin = Cypress.env("pin")


describe('Navigate to basic bank',() => {
    it('Should open basic bank', () => {
        login.loginUser(userName, pin)
    })
})