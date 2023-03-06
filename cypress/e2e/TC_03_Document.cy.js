describe('Document Test Suite Commands', () => {
    before(() => {
        cy.visit('#/login?_k=8alav0')
    })

    it('Document Test Commands - Title Properties', () => {
        cy.document().should(doc => {
            const titleText = doc.title
            expect(titleText).to.eql('Conduit')
        })
    })

    
    it.only('Document Test Commands - Get Width & Height', () => {
        cy.document().should(doc => {
            const docObj = Cypress.$(doc)
            let  docHeight = docObj.height()
            let  docWidht = docObj.width()
            console.log(`Screen Height is ${docHeight}`);
            console.log(`Screen Width is ${docWidht}`);
            Cypress.$(doc.body).css('background-color', 'red') // Promenio boju stranice u crvenu
        })
    })

    it('Document Test Commands - Cookies', () => {
        cy.document().should(doc => {
            //CREATE
            doc.cookie = "username=QA BOX"
            //READ
            console.log(doc.cookie);
            //UPDATE
            doc.cookie = "username=QA BOX LETS TEST"
            console.log(doc.cookie);
            //CLEAR
            doc.cookie = "username="
        })
    })

    it('CY Test Commands for Document - Title', () => {
           cy.title().then(txt => {
            expect(txt).to.eql('Conduit')
           })
    })

    it('CY Test Commands for Document - Set Viewport', () => {
            cy.viewport('ipad-2', 'portrait')
    })

    it('CY Test Commands for Document - Cookies', () => {
            //CREATE
            cy.setCookie('channelName', 'QA BOX')
            //READ
            cy.getCookie('channelName')
            cy.getAllCookies()
            //UPDATE
            cy.setCookie('channelName', 'QA BOX LETS TEST')
            //CLEAR
            cy.clearCookie('channelName')
    })
})