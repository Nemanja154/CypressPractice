// ***********************************************
const dayjs = require("dayjs");
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('isOlderThen', (numberOfMonth) => {
    cy.request('https://novalite.rs/api/feed').then(response => {
        const resBod = JSON.parse(response.body)

        var today = dayjs().format('YYYY/MM/DD')
        var numberOfMonthsAgo = dayjs().add(-numberOfMonth, 'month').format('YYYY/MM/DD')
        
        resBod.forEach(element => {
        var elementDate = dayjs(element.created_time).format('YYYY/MM/DD')
    
         if(dayjs(elementDate).isBetween(numberOfMonthsAgo,today)){
            expect(dayjs(elementDate).isBetween(numberOfMonthsAgo,today),
             `Datum of element ${elementDate} is NOT OLDER then ${numberOfMonth} month`).to.eq(true)   
            
         }else{
            expect(dayjs(elementDate).isBetween(numberOfMonthsAgo,today),
             `Datum of element ${elementDate} IS OLDER then ${numberOfMonth}. month`).to.eq(false)
         }
                        
        });
    })
})