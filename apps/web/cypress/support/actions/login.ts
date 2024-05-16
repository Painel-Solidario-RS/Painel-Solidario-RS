Cypress.Commands.add("login", (email, password) => {
    cy.get(`[data-test="login"]`).click()
    cy.get(`[data-test="email"]`).type(email)
    cy.get(`[data-test="password"]`).type(password)
    cy.get(`[data-test="entrar"]`).click()
})

Cypress.Commands.add("recoveryPassword", (email, password, phone) => {
    cy.get(`[data-test="login"]`).click()
    cy.get(`[data-test="email"]`).type(email)
    cy.get(`[data-test="recovery-password"]`).click()
    cy.get(`[data-test="phone"]`).type(phone)
    cy.get(`[data-test="code"]`).type(`123456`)
    cy.get(`[data-test="password"]`).type(password)
    cy.get(`[data-test="save"]`).click()
})

