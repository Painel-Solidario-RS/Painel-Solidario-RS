/// <reference types="cypress" />

import { options, services } from '../fixtures/services.json'

describe('Home Page', () => {
  beforeEach(() => cy.visit('/dashboard'))

  options.forEach((o) => {
    it.skip(`should display ${o.name} option`, () => {
      cy.get(`[data-test="${o.name}"]`).should('be.visible')
    })
  })

  services.forEach((s) => {
    it(`should display ${s.name} service`, () => {
      cy.get('.card').contains(s.name).should('be.visible')
    })
  })

})