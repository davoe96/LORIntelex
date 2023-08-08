// Test spec
import userAgentDataHandler from '../pages/userAgentDataHandler';
import userAgentHandlerUtils from '../../support/utils/userAgentHandlerUtils';
import dropdownPage from '../pages/dropdown';
import datepickerPage from '../pages/datepicker';
import '../../support/commands';
describe ('As a User of the Action Plan function I want to be Execute all flavors that are available successfully. So that I can confirm the workflow is initiated.', () =>{
    beforeEach(() => {
           cy.viewport(1280, 720); // Set the viewport to a desktop resolution (e.g., 1280x720)
           cy.visit('baseURL')
           cy.login('daboim@laingorourke.com', 'Ari-Ebube-2020');
           cy.visit('baseURL')
           cy.get('#navbar--btn-Nav_Locations').click()
           cy.get('#locations__search').type('TEST location do not use')
           cy.contains('TEST location do not use').click()
           cy.contains('TEST location do not use').should('be.visible')
           cy.get('.search-container').type('Action').click()
           cy.wait(1000) 
           cy.contains('.menu-link', 'Action Plan').click();
           cy.url().should('include','Login/LOR_AUSTest/Application/ActionPlans')
           Cypress.on('uncaught:exception', (err, runnable) => {
             // returning false here prevents Cypress from
             // failing the test
               return false
          })   
        // Mock the safeTop function
        cy.mockSafeTopFunction();
      
        // Call functions from PO and utils files here to be checked and set before each test
        if (userAgentDataHandler.isUserAgentDataSupported()) {
          // Handle user agent data if supported
          const userAgentData = userAgentDataHandler.getUserAgentData();
          // Use the userAgentData as needed
        } else {
          // Handle user agent data if not supported
          // ...
        }
        userAgentHandlerUtils.someFunctionFromUtil();
      
        // Other actions that need to be executed before each test...
        
        // Additional lines you provided:
        cy.get('#navbar--btn-Nav_Locations').click();
        cy.get('#locations__search').type('TEST location do not use');
        cy.contains('TEST location do not use').click();
        cy.contains('TEST location do not use').should('be.visible');
        cy.get('.search-container').type('Action').click();
        cy.contains('Platform Applications').should('be.visible');
        cy.wait(1000);
        cy.contains('.menu-link', 'Action Plans').click();
        cy.url().should('include', 'Login/LOR_AUSTest/Application/ActionPlans');
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false;
        });
      });

      it('Standalone Action Plans Execution', function() {
        cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/StandaloneActionPlans"]').click({force:true})
        cy.get('table tr:first-child td:nth-child(3) a').click();
        cy.contains('Execute Action Plan').should('be.visible').click({force:true})
        cy.get('#id-382A5F1BC1504F2DA03CF95EF1BE0442').click({force:true})
        //cy.contains('Please correct the following errors Error - You need to create at least one Activity in order to start this Action Plan.')
        
    })
    it('Action Plan with Activities Execution', function() {
      //cy.debug()
        cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/ActionPlanwith"]').click({force:true})
        cy.get('table tr:first-child td:nth-child(3) a').click();
        cy.contains('Execute Action Plan').focus().click({force:true})
        cy.get('#Form18').find('#id-D3F76CB2C2ED4ECA8747008B8F9C83FD').click();
        cy.log('Clicking on "Execute Action Plan" link');
        cy.contains('Execute Action Plan').should('be.visible')

      })
    })
  