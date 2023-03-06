describe('WEB ELEMENT COMMANDS - GET< CONTAIN $ DOM TRAVERSING METHODS', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/cygetcontains.html');
    });

    it('GET - SINGLE ELEMENT', () => {
        
        cy.get('input[name="Channel Name"]').type('QA BOX LET\'S TEST')
        cy.get('input[name="date"]').type('2020-07-17')
    });

    it('GET - Limit Scope - Example, scope is changed to fieldset(id="GETCOMMAND") from Document', () => {
        //cy.get('button').click({multiple:true}); //klikne na sve button koji postoje na stranici
        cy.get('fieldset#GETCOMMAND').within(div => {  // wihtin kada trazimo elemente u nekom elementu

            cy.get('button').click({multiple:true})
        })
    });

    
    it('GET - MULTIPLE ELEMENT - PART 1', () => {
        cy.get('button').should('have.length', '9')

        cy.get('button').first().click()

        cy.get('button').eq(1).click();  //From Start

        cy.get('button').eq(-1).click(); //From End

        cy.get('button').last().click()
    });
    
    it('GET - MULTIPLE ELEMENT _ PART 2', () => {
        cy.get('fieldset#GETCOMMAND').children().last().find(':checkbox').check({multiple:true}) // :checkbox - hvatamo checkbox

        cy.get(':checkbox').parent().prev().find('button').first().click()

        cy.reload()

        cy.get(':checkbox').eq(2).siblings(':checkbox').check({multiple:true})

        cy.reload()

        cy.get('button').each(btn => {
            btn.hide()
        })

        cy.get('span').each(spn => {
            cy.log(spn.text)
        })

    });

    it('CONTAINS with Text', () => {
        cy.contains('SPAN ONE').click()

        cy.contains('SPAN TWO').click()
        
    });

    it('CONTAINS with Text $ Selector', () => {
        cy.contains('span', 'FIND ME').click()
        cy.contains('button', 'FIND ME').click()

        cy.get('span:contains("FIND ME")').click()
    });

    it('CONTAINS with Value', () => {
        cy.get('form').contains('Submit the form').click()
    });

    it.only('CONTAINS with RegEx', () => {
        
        cy.contains('Add').click() //uvek klikce prvo dugme
       // cy.contains(/^add$/i).click() // klikce drugo dugme
    });

    it('CONTAINS - Element preference orfer', () => {
        cy.contains('Search').click()
        
    });
    
})