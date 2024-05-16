/// <reference types="cypress" />

describe('Profile Page', () => {

  beforeEach(() => {
    cy.login('email', 'password')
    cy.get('[data-test="profile"]').click()
  })

  it.skip('should display user info', () => {
    cy.get(`[data-test="name"]`).should('be.visible')
    cy.get(`[data-test="email"]`).should('be.visible')
    cy.get(`[data-test="phone"]`).should('be.visible')
    cy.get(`[data-test="ocupation"]`).should('be.visible')
    cy.get(`[data-test="profile"]`).should('be.visible')
    cy.get(`[data-test="address"]`).should('be.visible')
    cy.get(`[data-test="turn"]`).should('be.visible')
    cy.get(`[data-test="activities"]`).should('be.visible')
  })

})