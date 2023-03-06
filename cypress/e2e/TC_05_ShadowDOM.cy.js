describe('Shadow DOM', () => {

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/Help%20Folder/shadowDOM.html")
    })

    it('Assert H@ text within Light DOM', () => {
        cy.get('h2')
            .should('have.text', 'I belong to Regular/Light Dom')
    });

    it('Type to Textbox within Light DOM', () => {
        cy.get('#channelname')
            .type('QA BOX LET\'S TEST')
            .should('have.value', 'QA BOX LET\'S TEST')
    });

    it('Assert H2 text within Shadow DOM', () => {
        cy.get('button').click()
        cy.get('#shadowHost')
            //.shadow()
            .find('h2')
            .should('have.text', 'I belong to Shadow DOM')
    });

    it.only('Type to Textbox within Shadow DOM', () => {
        cy.get('button').click()
        // cy.get('#name')            // Ovako ne moze da pronadje element  koji je Shadow 
        //     .type('QA BOX LET\'S TEST')     
        //     .should('have.value', 'QA BOX LET\'S TEST')
        cy.get('#shadowHost') // moramo prvo da uhvatimo ceo shadow
            //.shadow() // sa ovom komandom ulazimo u shadow. OVO MOZEMO DA ZAOBIDJEMO AKO UBACIMO includeShadowDom: true
            .find('#name')
            .type('QA BOX LET\'S TEST')
            .should('have.value', 'QA BOX LET\'S TEST')
    });


})