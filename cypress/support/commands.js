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
  Cypress.Commands.add('mockSafeTopFunction', () => {
    cy.on('window:before:load', (win) => {
      win.Intelex = {
        Util: {
          Window: {
            safeTop: () => ({
              $: () => {},
            }),
          },
        },
      };
    });
  });
  // support/commands.js

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
  return $iframe.contents().find('body');
});
Cypress.Commands.add('waitForElementToDisappear', { prevSubject: true }, (subject) => {
  const MAX_ATTEMPTS = 10;
  let attempts = 0;

  function checkElementExistence() {
    attempts++;

    if (attempts >= MAX_ATTEMPTS) {
      throw new Error('Element did not disappear within the specified time.');
    }

    return cy.wrap(subject).should('not.exist').then(() => {
      if (Cypress.$(subject).length === 0) {
        return; // Element no longer exists in the DOM
      }

      // Element still exists, recursively check again after a short delay
      return Cypress.Promise.delay(500).then(checkElementExistence);
    });
  }

  return checkElementExistence();
});
Cypress.Commands.add('iframeOnload', { prevSubject: 'element' }, ($iframe) => {
  return new Cypress.Promise(resolve => {
      $iframe.on('load', () => {
          resolve($iframe.contents().find('body'));
      });
  });
});
