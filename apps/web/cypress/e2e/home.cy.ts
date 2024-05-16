/// <reference types="cypress" />

import { options, services } from '../fixtures/services.json'

describe('Home Page', () => {

  options.forEach((o) => {
    it.skip(`should display ${o.name} option`, () => {
      cy.get(`[data-test="${o.name}"]`).should('be.visible')
    })
  })

  services.forEach((s) => {
    it.skip(`should display ${s.name} service`, () => {
      cy.get(`[data-test="${s.name}"]`).should('be.visible')
    })
  })

})