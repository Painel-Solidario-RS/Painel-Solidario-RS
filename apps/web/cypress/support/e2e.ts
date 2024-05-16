import './commands'

beforeEach(()=>{
    cy.visit('/')
})

afterEach(()=>{
    cy.clearCookies()
})