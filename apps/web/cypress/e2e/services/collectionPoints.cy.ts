/// <reference types="cypress" />

describe('Collection Points Page', () => {

  beforeEach(() => {
    cy.login('email', 'password')
    cy.get('[data-test="collection-points"]').click()
  })

  it.skip('should display page elements', () => {
    cy.get('[data-test="map-view"]').should('be.visible')
    cy.get('[data-test="collection-points-list"]').should('be.visible')
  })

})