/// <reference types="cypress" />

describe('Donations Page', () => {

  beforeEach(() => {
    cy.login('email', 'password')
    cy.get('[data-test="donations"]').click()
  })

  it.skip('should display page elements', () => {
    cy.get('[data-test="register-donation"]').should('be.visible')
    cy.get('[data-test="needed-donations"]').should('be.visible')
    cy.get('[data-test="campaings"]').should('be.visible')
  })

})