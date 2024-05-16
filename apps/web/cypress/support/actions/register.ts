Cypress.Commands.add("registerPeople", (data: RegisterPeople) => {
    cy.get(`[data-test="register"]`).click()
    cy.get(`[data-test="name"]`).type(data.name)
    cy.get(`[data-test="email"]`).type(data.email)
    cy.get(`[data-test="phone"]`).type(data.phone)
    cy.get(`[data-test="ocupation"]`).type(data.ocupation)
    cy.get(`[data-test="profile"]`).type(data.profile)
    cy.get(`[data-test="streetType"]`).type(data.address.streetType)
    cy.get(`[data-test="street"]`).type(data.address.street)
    cy.get(`[data-test="number"]`).type(data.address.number)
    cy.get(`[data-test="complement"]`).type(data.address.complement)
    cy.get(`[data-test="neighborhood"]`).type(data.address.neighborhood)
    cy.get(`[data-test="city"]`).type(data.address.city)
    cy.get(`[data-test="state"]`).type(data.address.state)
    cy.get(`[data-test="zip"]`).type(data.address.zip)
    cy.defineTurn(data.turn)
    cy.get(`[data-test="volunteer-category"]`).type(`civil`)
    cy.addActivities(data.activities)
    cy.get(`[data-test="save"]`).click()
})

Cypress.Commands.add("defineTurn", (turn: string[]) => {
    for(const t of turn){
        cy.get(`[data-test="${t}"]`).click()
    }
})

Cypress.Commands.add("addActivities", (activities: string[]) => {
    cy.get(`[data-test="add-activities"]`).click()

    for(const a of activities){
        cy.get(`[data-test="search-activity"]`).clear().type(a)
        cy.get(`[data-test="${a}"]`).click()
    }

    cy.get(`[data-test="add"]`).click()
})


Cypress.Commands.add("registerShelter", (data: RegisterShelter) => {
    cy.get(`[data-test="register-shelter"]`).click()
    cy.get(`[data-test="name"]`).type(data.name)

    for(const t of data.type){
        cy.get(`[data-test="${t}"]`).click()
    }

    cy.get(`[data-test="target"]`).type(data.target)
    cy.get(`[data-test="phone"]`).type(data.phone)
    cy.get(`[data-test="streetType"]`).type(data.address.streetType)
    cy.get(`[data-test="street"]`).type(data.address.street)
    cy.get(`[data-test="number"]`).type(data.address.number)
    cy.get(`[data-test="complement"]`).type(data.address.complement)
    cy.get(`[data-test="neighborhood"]`).type(data.address.neighborhood)
    cy.get(`[data-test="city"]`).type(data.address.city)
    cy.get(`[data-test="state"]`).type(data.address.state)
    cy.get(`[data-test="zip"]`).type(data.address.zip)
    cy.get(`[data-test="capacity"]`).type(`${data.capacity}`)
    cy.get(`[data-test="available"]`).type(`${data.available}`)
    cy.get(`[data-test="save"]`).click()
})