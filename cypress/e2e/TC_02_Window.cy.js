
describe('Window Test Suite Commands', () => {

    before(()=> {
        cy.visit('#/login?_k=8alav0')
    });

    it('Window Test Commadns - URI Properties', () => {
        // bolje koristiti should nego then
        cy.window().should(win => {
            const loc = win.location;
            expect(loc.hash).to.be.eql("#/login?_k=8alav0");
            expect(loc.host).to.be.eql("react-redux.realworld.io");
            expect(loc.pathname).to.eql("/");
            expect(loc.protocol).to.eql("https:")
        })
    });
    
    it('CY Test Commands - URI Properties', () => {
        cy.hash().should('eq', '#/login?_k=8alav0' )
        cy.location('host').should('eq', 'react-redux.realworld.io')
        cy.location('pathname').should('eq', '/')
        cy.location('protocol').should('eq', 'https:')
    })

    it('Window Test Commadns - Page Reload', () => {
        cy.window().should(win => {
            win.location.reload()
        })
    });

    it('CY Test Commands - Page Reload', () => {
        cy.reload()
    })

    it('Windows Test Command - Page Navigation', () => {
        cy.contains('Sign up').click()
        cy.window().should(win => {
            win.history.back() // win.history.go(-1)
        })
        cy.contains('Need an account').should('be.visible')

        cy.window().should(win => {
            win.history.forward() // win.history.go(1)
        })
        cy.contains('Have an account').should('be.visible')
    })

    it('CY Test Command - Page Navigation', () => {
        cy.contains('Sign up').click()
        cy.go('back') // cy.go(-1)
        cy.contains('Need an account').should('be.visible')

        cy.go('forward') // cy.go(1)
        cy.contains('Have an account').should('be.visible')
    })

    it('Windows Test Command - Storage', () => {
        cy.window().should(win => {
            expect(win.localStorage.length).to.eq(0)
            win.localStorage.setItem('Name', 'QA BOX LET\'S TEST')
            expect(win.localStorage.getItem('Name')).to.eql('QA BOX LET\'S TEST')
        })
    })

    it.only('CY Test Command - Storage', () => {
        cy.clearLocalStorage()
    })


})