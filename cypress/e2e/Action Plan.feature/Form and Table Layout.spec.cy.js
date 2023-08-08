// Test spec
import userAgentDataHandler from '../pages/userAgentDataHandler';
import userAgentHandlerUtils from '../../support/utils/userAgentHandlerUtils';


describe ('As a User of the Action Plan function I want to be assured that the layout for the tables and forms as expected. So that I can assure the fixtures meet the requirements', () =>{
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
      
 
   it('Successfully access and verify Table layout for All Action Inventory', function() {
       cy.get('.breadcrumbs')
       cy.get('#883ead37-90a3-42ef-badd-4549f4f20940').should('be.visible')
       cy.contains('All Actions Inventory').should('be.visible')
       cy.get('#a84f379e-9548-46a0-86d0-06ebcf0da8cd').should('be.visible')
       cy.contains('Standalone Action Plans').should('be.visible')
       cy.get('#3d6500cf-0368-4d38-ac7d-c749eb80f378').should('be.visible')
       cy.contains('Action Plan with Activities').should('be.visible')
       cy.get('#6dcb9dcd-131c-4699-b3e7-051502d1b58e').should('be.visible')
       cy.contains('Global Action Plan').should('be.visible')
       cy.contains('More').should('be.visible')
       cy.contains('Action No.').should('be.visible')
       cy.contains('Location').should('be.visible')
       cy.contains('Action Plan Type').should('be.visible')
       cy.contains('Actual Related Source').should('be.visible')
       cy.contains('Action Required').should('be.visible')
       cy.contains('Person Responsible').should('be.visible')
       //cy.contains('Target Date').should('be.visible')
   }) 

   it('Verify Table layout for Standalone Action Plans', function() {
    //cy.contains('StandaloneActionPlans').should('be.visible')
    cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/StandaloneActionPlans"]').click({force:true})
     //cy.visit('https://preprod-au.intelex.com/Login/LOR_AUSTest/Application/ActionPlans/StandaloneActionPlans')  
     cy.get('.breadcrumbs').contains('Standalone Action Plans').should('be.visible')
     cy.contains('Add Entry').should('be.visible')
     cy.contains('Delete').should('be.visible')
     cy.contains('List All').should('be.visible')
     cy.contains('Advanced Search').should('be.visible')
     cy.contains('Actions').should('be.visible')
     cy.contains('Action No.').should('be.visible')
     cy.contains('Location').should('be.visible')
     cy.contains('Action Required').should('be.visible')
     cy.contains('Person Responsible').should('be.visible')
     cy.contains('Target Date').should('be.visible')
     cy.contains('Status').should('be.visible')

   })
   it('Verify Table layout for Global Action Plans', function() {
    cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/GlobalAction"]').click({force:true})  
    cy.get('.breadcrumbs').contains('Global Action Plans').should('be.visible')
    cy.contains('Add Entry').should('be.visible')
    cy.contains('List All').should('be.visible')
    cy.contains('Advanced Search').should('be.visible')
    cy.contains('Actions').should('be.visible')
    cy.contains('Action No.').should('be.visible')
    cy.contains('Location').should('be.visible')
    cy.contains('Action Required').should('be.visible')
    cy.contains('Role Responsible').should('be.visible')
    cy.contains('Target Date').should('be.visible')
    cy.contains('Local Action Plans').should('be.visible')
    cy.contains('Progress').scrollIntoView().should('be.visible');
    cy.contains('Status').scrollIntoView().should('be.visible');


  
  })
   it('Verify Table layout for Action Plan with Activities', function() {
    cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/ActionPlanwith"]').click({force:true})  
    cy.get('.breadcrumbs').contains(' Action Plan with Activities').should('be.visible')
    cy.contains('Add Entry').should('be.visible')
    cy.contains('List All').should('be.visible')
    cy.contains('Advanced Search').should('be.visible')
    cy.contains('Actions').should('be.visible')
    cy.contains('Action No.').should('be.visible')
    cy.contains('Location').should('be.visible')
    cy.contains('Action Required').should('be.visible')
    cy.contains('Person Responsible').should('be.visible')
    cy.contains('Start Date').should('be.visible')
    cy.contains('Activities Progress').scrollIntoView().should('be.visible')
    cy.contains('Status').scrollIntoView().should('be.visible')

})

it('Verify Creation Form for Standalone Action Plans', function() {
 // cy.visit('ActionPlans/ActionPlanwith/Forms/ActionPlans_ActionPlanWAct_Detail/Create')
  cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/StandaloneActionPlans"]').click({force:true})
  cy.contains('Add Entry').click({force:true})
  cy.url().should('include','StandaloneActionPlans/Forms/ActionPlans_ActionPlan_Detail/Create')
  cy.get('.breadcrumbs').contains('Standalone Action Plans').should('be.visible')
  cy.contains('Execute Action Plan').should('be.visible')
  cy.contains('Save as Draft').should('be.visible')
  cy.contains('Cancel').should('be.visible')
  cy.contains('New Action Plan').should('be.visible')
  cy.contains('Action Plan Details').should('be.visible')
  cy.contains('Location').should('be.visible')
  cy.contains('Type of Action').should('be.visible')
  cy.contains('Action Required').should('be.visible')
  cy.contains('Person Responsible').should('be.visible')
  cy.contains('Target Date').should('be.visible')
  cy.contains('Type of Review').should('be.visible')

})

it('Verify Creation Form for Action Plan with Activities', function() {
  cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/ActionPlanwith"]').click({force:true})
  cy.contains('Add Entry').click({force:true})
  cy.url().should('include','ActionPlanwith/Forms/ActionPlans_ActionPlanWAct_Detail/Create')
  cy.get('.breadcrumbs').contains('Action Plan with Activity').should('be.visible')
  cy.contains('Continue').should('be.visible')
  cy.contains('Cancel').should('be.visible')
  cy.contains('New Action Plan with Activities').should('be.visible')
  cy.contains('Action Plan Details').should('be.visible')
  cy.contains('Location').should('be.visible')
  cy.contains('Select a Template').should('be.visible')
  cy.contains('Type of Action').should('be.visible')
  cy.contains('Action Required').should('be.visible')
  cy.contains('Person Responsible').should('be.visible')
  cy.contains('Start Date').should('be.visible')
  cy.contains('Type of Review').should('be.visible')

})

it('Verify Creation Form for Global Action Plan', function() {
  cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/GlobalAction"]').click({force:true})
  cy.contains('Add Entry').click({force:true})
  cy.url().should('include','ActionPlans/GlobalAction/Forms/ActionPlans_GlobActionPlan_Detail/Create')
  cy.get('.breadcrumbs').contains('Global Action Plan').should('be.visible')
  cy.contains('Continue').should('be.visible')
  cy.contains('Cancel').should('be.visible')
  cy.contains('Global Action Plan Details').should('be.visible')
  cy.contains('New Global Action Plan').should('be.visible')
  cy.contains('Location').should('be.visible')
  cy.contains('Type of Action').should('be.visible')
  cy.contains('Action Required').should('be.visible')
  cy.contains('Role Responsible').should('be.visible')
  cy.contains('Target Date').should('be.visible')
  cy.contains('Type of Review').should('be.visible')

})
})
