
describe("Pop Up Test Suite", () => {
    before(() => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/differentalerttypes.html'); // pokrenuti differentaleerttypes
    })
    it('Alert - First Way', () => {
        cy.on('window:alert', alertText => {
            expect(alertText).to.eq("I\'m an Alert Box") //moram da definisem pre nego sto kliknem na dugme
        })
        cy.get('#alert').click();
    });

    it('Alert - Second Way - Multiple Alerts', () => {
        const fn = cy.stub()
        cy.on('window:alert', fn)
        cy.get('#miltiplealert').click().then(() => {
            expect(fn.getCall(0)).to.be.calledWithExactly('Fist Alert Box')
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
        })
    });

    it('Window pop up', () => {
        const pop_url = "https://www.youtube.com/c/qaboxletstest/"
        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowOpen')
        })
        cy.get('#winpop').click()
        cy.get('@windowOpen').should('be.calledWith', pop_url)
        cy.window().then(win => {
            win.location.href = pop_url  // ucitavam novu stranicu u postojecu
            cy.wait(4000)
            cy.get('#search-input > #search').type('Cypress by QA box lets test{enter}')  // kada stavimo enter u zagradu to je komanda za pritiskanje entera
        })
    });
})