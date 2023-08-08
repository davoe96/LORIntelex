// Test spec
import userAgentDataHandler from '../pages/userAgentDataHandler';
import userAgentHandlerUtils from '../../support/utils/userAgentHandlerUtils';
import dropdownPage from '../pages/dropdown';
import datepickerPage from '../pages/datepicker';
import '../../support/commands';


describe ('As a User of the Action Plan function I want to be Create all flavors that are available successfully. So that I can assure the fixtures meet the requirements', () =>{
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
        
      });
      it('Standalone Action Plans Creation', function() {
        cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/StandaloneActionPlans"]').click({force:true})
        cy.contains('Add Entry').click({force:true})
        cy.url().should('include','StandaloneActionPlans/Forms/ActionPlans_ActionPlan_Detail/Create')
        cy.get('.breadcrumbs').contains('Standalone Action Plans').should('be.visible')
        dropdownPage.selectRandomCPARTypeIDOption('CPARTypeID');
        cy.contains('Action Required').type('This needs to be looked at as a top middle bottom priority!')
        cy.contains('Clear').filter('.entityselector-clearLink').click();
        cy.contains('Assign to me').filter('.entityselector-assignToMeLink').click();
        // Step 4: Select a random past date using a datepicker
        cy.get(datepickerPage.datepickerInput4).then(($input) => {
        cy.wait(1000)
        datepickerPage.selectRandomPastDate($input);
        cy.get('body').click();
        cy.wait(1000);
        dropdownPage.selectRandomReviewTypeOption('ReviewType');
        cy.contains ('Save as Draft').click()
        cy.contains('This needs to be looked at as a top middle bottom priority!').should('be.visible')
        cy.contains('Note: The action plan has been created successfully.').should('be.visible')
        cy.get('#id-382A5F1BC1504F2DA03CF95EF1BE0442').contains('Execute Action Plan')
        cy.contains('Add Comment').should('be.visible')
        cy.contains('Edit').should('be.visible')
        cy.contains('Delete').should('be.visible')
        cy.contains('Exit').should('be.visible').click()

      })
    })
 
 it('Action Plan with Activities Creation', function() {
    cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/ActionPlanwith"]').click({force:true})
    cy.contains('Add Entry').click({force:true})
    cy.url().should('include','ActionPlans/ActionPlanwith/Forms/ActionPlans_ActionPlanWAct_Detail/Create')
    cy.get('.breadcrumbs').contains('Action Plan with Activity').should('be.visible')
    cy.contains('Clear').filter('.entityselector-clearLink').click();
    cy.contains('Assign to me').filter('.entityselector-assignToMeLink').click();
    dropdownPage.selectRandomCPARTypeIDOption('CPARTypeID')
    cy.contains('Action Required').type('This needs to be looked at as a top middle bottom priority!')
    cy.get(datepickerPage.datepickerInput5).then(($input) => {
        cy.wait(1000)
        datepickerPage.selectRandomPastDate($input);
        cy.get('body').click();
        cy.wait(1000)
    dropdownPage.selectRandomReviewTypeOption('ReviewType');
    cy.contains('Continue').click()
    cy.url().should('include','Forms/ActionPlans_ActionPlanWAct_Detail/View/')
    cy.contains('Exit').click()

    })
})

    it('Global Action Plan Creation', function() {
          // Click on the "Global Action" link
        cy.get('a[href="/Login/LOR_AUSTest/Application/ActionPlans/GlobalAction"]').click({force:true})
         // Click on "Add Entry"   
        cy.contains('Add Entry').click({force:true})
            // Ensure URL includes the expected path
        cy.url().should('include','ActionPlans/GlobalAction/Forms/ActionPlans_GlobActionPlan_Detail/Create')
            // Verify page title
        cy.get('.breadcrumbs').contains('Global Action Plan').should('be.visible')
            // Select a random option for CPARTypeID dropdown
        dropdownPage.selectRandomCPARTypeIDOption('CPARTypeID')
        //Type in the the action required text
        cy.contains('Action Required').type('This needs to be looked at as a top middle bottom priority!')
            // Click "Select" to open the modal
        cy.contains('Select').filter('.entityselector-selectLink').click();
        //Confirm the modal opens
        cy.get('.ui-dialog-title').contains('Select Role Responsible for Global Action Plan')
        cy.wait(1000)
// Wait for the iframe to become visible
cy.get('iframe#selectorFrame').should('be.visible').then(($iframe) => {
    cy.wait(1000)
    // Switch context to the iframe body
    cy.wrap($iframe).iframe().as('iframeBody');
 // Find and click the row checkbox (assuming you have the correct row selector) 
 cy.get('@iframeBody').find('tbody tr.data_row').eq(2).find('.td_selector input.rowSelector').click();
cy.wait(1000)
// Click the "Select" button within the iframe
cy.get('#dialog_select').click().wait(100).click(); 
// Interact with other elements within the modal
cy.get('.ui-state-hover').trigger('click')
// Submit the form
cy.get('form').submit().wait(1000).submit()
//Force a close
cy.get('button.ui-dialog-titlebar-close').click();
 cy.wait(1000)
// Interact with datepicker and select a date
  cy.get(datepickerPage.datepickerInput4).then(($input) => {
  cy.wait(1000)
  datepickerPage.selectRandomPastDate($input);
  cy.get('body').click();
  cy.wait(1000)
// Select a random option for ReviewType dropdown
dropdownPage.selectRandomReviewTypeOption('ReviewType');
cy.contains('Continue').click()
cy.url().should('include','GlobalAction/Forms/ActionPlans_GlobActionPlan_Detail/View/')
cy.contains('Exit').click()

})
})
})
})
  //cy.get('#navbar--btn-Nav_Locations').scrollIntoView()
// Wait until the overlay is removed
//cy.get('.ui-widget-overlay.ui-front').should('not.exist');

// Now click the button
//cy.get('#navbar--btn-Nav_Locations')
//cy.get('@iframeBody').find('#dialog_select').click();

    // Find and click the "Select" button (assuming the button ID is "selectButton")
    //cy.get('@iframeBody').find('#dialog_select').click({force:true});
   /*  cy.get('#dialog_select').click({ force: true }).wait(100).click({ force: true }); 
    cy.get('iframe#selectorFrame').should('be.visible').then(($iframe) => {
        // Switch context to the iframe body
        cy.wrap($iframe).iframe().as('iframeBody');
      
        // Find and click the row checkbox (assuming you have the correct row selector)
        cy.get('@iframeBody').find('tbody tr.data_row').eq(2).find('.td_selector input.rowSelector').click();
      
        // Wait until the overlay is removed
        cy.get('.ui-widget-overlay.ui-front').should('not.exist');
      
        // Now click the "Select" button with force option
        cy.get('@iframeBody').find('#dialog_select').click({ force: true });
      });
      
    cy.get('#dialog_select').click({ force: true }).wait(200).click({ force: true });
//cy.get('button').click({ multiple: true })
    cy.window().then((win) => {
        if (win.onclose) {
          win.onclose(); // Replace 'onClose' with the actual event name if needed
        } */
    




// Wait for the row containing "Branch Manager" to exist and click its checkbox
/* cy.get('tbody tr.data_row')
  .contains('Branch Manager')
  .should('exist')
  .find('input.rowSelector')
  .check(); */



// Find the row by its ID and click its checkbox
//cy.get('#\\37 2aff5cb-1119-4af8-be3d-3b5a7dc60ff0 input.rowSelector').check({orce:true});
//cy.contains('tr.data_row', 'Branch Manager').find('input.rowSelector').check();
// Find the 3rd row and click its checkbox
//cy.get('tbody tr.data_row:nth-child(3) input.rowSelector').check();



        /* cy.get(datepickerPage.datepickerInput4).then(($input) => {
            cy.wait(1000)
            datepickerPage.selectRandomPastDate($input);
            cy.get('body').click();
            cy.wait(1000)
            dropdownPage.selectRandomReviewTypeOption('ReviewType');
            cy.contains('Continue').click()
    cy.url().should('include','Forms/ActionPlans_ActionPlanWAct_Detail/View/')
    cy.contains('Exit').click() */
    

   /*  cy.get('#Template_Link').click({force:true})
    cy.wait(1000)
    cy.get('#dialog_select')
    cy.wait(1000)
    cy.get('tr.data_row:eq(0) select').select('Jo Locascio Template	'); // Replace 'Option 1' with the desired value to select
    dropdownPage.selectRandomCPARTypeIDOption('CPARTypeID'); */
    /* cy.contains('Action Required').type('This needs to be looked at as a top middle bottom priority!')
    
    // Step 4: Select a random past date using a datepicker
    cy.get(datepickerPage.datepickerInput4).then(($input) => {
    cy.wait(1000)
    datepickerPage.selectRandomPastDate($input);
    cy.get('body').click();
    cy.wait(1000);
    dropdownPage.selectRandomReviewTypeOption('ReviewType');
    cy.contains ('Save as Draft').click()
    cy.contains('This needs to be looked at as a top middle bottom priority!').should('be.visible')
    cy.contains('Note: The action plan has been created successfully.').should('be.visible')
    cy.get('#id-382A5F1BC1504F2DA03CF95EF1BE0442').contains('Execute Action Plan')
    cy.contains('Add Comment').should('be.visible')
    cy.contains('Edit').should('be.visible')
    cy.contains('Delete').should('be.visible')
    cy.contains('Exit').should('be.visible').click() */
