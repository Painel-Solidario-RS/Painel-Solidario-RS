import { fakerPT_BR as faker } from '@faker-js/faker'

describe('Register People', () => {
  it.skip('should register user successfully', () => {
    cy.registerPeople({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      ocupation: 'Developer',
      profile: 'Developer',
      address: {
        streetType: 'Rua',
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        complement: 'Complement',
        neighborhood: 'Bairro',
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.location.zipCode()
      },
      turn: ['morning', 'afternoon'],
      activities: ['activity 1', 'activity 2']
    })
  })

  it.skip('should register shelter successfully', () => {
    cy.registerShelter({
      name: faker.company.name(),
      type: ['homeless'],
      target: 'Homeless',
      phone: faker.phone.number(),
      address: {
        streetType: 'Rua',
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        complement: 'Complement',
        neighborhood: 'Bairro',
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.location.zipCode()
      },
      capacity: 10,
      available: 5
    })
  })
})