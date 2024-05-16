/// <reference types="cypress" />

describe('Management Page', () => {

  beforeEach(() => {
    cy.login('email', 'password')
    cy.get('[data-test="management"]').click()
  })

  it.skip('should display page elements', () => {
    cy.get('[data-test="register-shelter"]').should('be.visible')
  })

})