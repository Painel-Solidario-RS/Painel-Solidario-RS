/// <reference types="cypress" />

import { services } from '../fixtures/services.json'

describe('Dashboard Page', () => {

  beforeEach(() => {
    cy.login('email', 'password')
  })

  it.skip('should display the user info', () => {
    cy.get('[data-test="user-info"]').should('be.visible')
  })

  services.forEach((s) => {
    it.skip(`should display the ${s.name} service`, () => {
      cy.get(`[data-test="${s.name}"]`).should('be.visible')
    })
  })

})