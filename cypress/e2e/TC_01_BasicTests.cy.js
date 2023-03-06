/// <reference types="cypress" />

describe('LogIn Suite', () => {
    it('LogIn Test', function() {

        // ako hocemo da koristimo this moramo u koristiti function()
        cy.log(this.test.parent.title)
        cy.log(this.test.title)
        cy.log(this.test)


        cy.visit('https://react-redux.realworld.io/#/login?_k=8alav0')

        cy.get('input[type="email"]').type(Cypress.env('email'))
        cy.get('input[type="password"]').type(Cypress.env('password'))
        cy.get('button[type="submit"]').click()
        cy.contains('No articles are here... yet.').should('be.visible')
    })

    it('Second test', () => {
        //ovo nece raditi zato sto korisitmo arrow function
        cy.log(this.test.parent.title)
    })

})