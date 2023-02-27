describe('LogIn Suite', () => {
    it('LogIn Test', () => {

    cy.visit(Cypress.config('baseUrl'))

    cy.get('input[type="email"]').type(Cypress.env('email'))
    cy.get('input[type="password"]').type(Cypress.env('password'))
    cy.get('button[type="submit"]').click()
    cy.contains('No articles are here... yet.')
    })
})