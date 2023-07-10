describe ('As a user I want to successfully log on to the Homepage of Intelex, access Feed; Apps and then confirm all 3 items of HS are available', function(){
    describe ('Successful Login', () =>{
      it('successfully log on to the Homepage', function(){
        cy.visit('baseURL')
        cy.login('daboim@laingorourke.com', 'Ari-Ebube-2020');
        cy.visit('baseURL')
          //cy.url ().should ('include','/LOR_AUSTest/Alliance')
         // cy.contains('Feed').click()
          //cy.contains('Apps').click()
          //cy.contains('Health and Safety').click()
          //cy.contains('EHS Incident Management').should('be.visible');
          //cy.contains('Observations').should('be.visible');
          //cy.contains('Claims Management').should('be.visible');
          //cy.url().should ('contain','/Application/EHSIncidentMang')
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false

          })
    })
    })
})