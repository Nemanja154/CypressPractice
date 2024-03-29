describe('Frame Suite', () => {

    it('Type into element inside a frame', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/iframePage.html')
        cy.get('input[name="Channel Name"]').clear().type('QA BOX LET\'S TEST')
    });


    it('iFrame - Type in the body - jQuery Way', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').within(($frame) => {
            const body = $frame.contents().find('body#tinymce')
            cy.wrap(body).clear().type('Test')
        })
    });

    it.only('Nested Frames - Fetch the text - JavaScript Way', () => {
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
        cy.get('frame[src="/frame_top"]').within($frame => {
            const [frame_top] = $frame.get()
            const text = frame_top.contentDocument.body.getElementsByTagName('frame')[1]
                .contentDocument.body.querySelector('div#content').innerText
            expect(text).to.be.eql('MIDDLE')
        })
    })

    it('Nested Frames - Fetch the text - jQuery Way', () => {
        // $('frame[src="/frame_top"]').contents().find('frame[src="/frame_middle"]').contents().find('div#content').text()
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
        cy.get('frame[src="/frame_top"]').within($frame => {
            cy.wrap($frame.contents().find('frame[src="/frame_middle"]')).within(fr => {
                cy.wrap(fr.contents().find('div#content')).should('have.text', 'MIDDLE')
            })
        })
    })
})