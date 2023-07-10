Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], ()=>{
        cy.visit('baseURL')
        cy.get('#userName').type('daboim@laingorourke.com');
        cy.get('#password').type('Ari-Ebube-2020');
        cy.get("form").contains('Log in').click();

    })
    
      
      
        
        //cy.url ().should ('include','/LOR_AUSTest/Alliance')
        //cy.get('h1').should('contain', username)
      
      
        validate: () => {
          cy.getCookie('your-session-cookie').should('exist')

        }
    
  })