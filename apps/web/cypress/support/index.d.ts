/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
    recoveryPassword(email: string, password: string, phone : string): Chainable<void>
    registerPeople(data: RegisterPeople): Chainable<void>
    registerShelter(data: RegisterShelter): Chainable<void>
    defineTurn(turn: string[]): Chainable<void>
    addActivities(activities: string[]): Chainable<void>
  }
}

interface RegisterPeople {
  name: string
  email: string
  phone: string
  ocupation: string
  profile: string
  address: Address
  turn: string[]
  activities: string[]
}

interface RegisterShelter {
  name: string
  type: string[]
  target: string
  phone: string
  address: Address
  capacity: number
  available: number
}

interface Address {
  streetType: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  zip: string
}