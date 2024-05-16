/// <reference types="cypress" />

describe('Shelters Page', () => {

  beforeEach(() => {
    cy.login('email', 'password')
    cy.get('[data-test="shelters"]').click()
  })

  it.skip('should display page elements', () => {
    cy.get('[data-test="map-view"]').should('be.visible')
    cy.get('[data-test="shelter-list"]').should('be.visible')
  })

})