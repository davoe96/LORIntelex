import dynamoPage from '../pages/dynamo'; // Correct the import path based on the folder structure
import dropdownPage from '../pages/dropdown';
import datepickerPage from '../pages/datepicker';

//import dynamoPage from '../pages/dynamo';
describe ('As a user I want to successfully Review Claims and validate the user journey and Clone an existing Claim', function(){

//describe ('Review Claim', () =>{
      beforeEach(() => {
       //cy.clearCache();
       cy.viewport(1280, 720); // Set the viewport to a desktop resolution (e.g., 1280x720)
          cy.visit('baseURL')
          cy.login('daboim@laingorourke.com', 'Ari-Ebube-2020');
          cy.visit('baseURL')
          cy.get('#navbar--btn-Nav_Locations').click()
          cy.get('#locations__search').type('TEST location do not use')
          cy.contains('TEST location do not use').click()
          cy.contains('TEST location do not use').should('be.visible')
          cy.get('.search-container').type('claims').click()
          cy.wait(1000)
          cy.contains('.menu-link', 'Claims Management').click();
         // cy.select("HEALTH AND SAFETY").select(0).invoke("val").should("eq", "Claims Management").debug().click()
         //cy.get('.menu-link ').eq(0).click()
          cy.url().should('include','Login/LOR_AUSTest/Application/ClaimsMgmt')
          cy.contains('Review a Claim').click()
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
              return false
         })
        })

        it('Review Claim Table and Form confirming fixture requirements', function() {
            cy.url('/Application/ClaimsMgmt/ReviewClaim').should('include','ReviewClaim')
            cy.get('.inventory-body').contains('Claim Number')
            cy.contains('Location').should('be.visible')
            cy.contains('Date Claim Submitted').should('be.visible')
            cy.contains('Date Claim Accepted').should('be.visible')
            cy.contains('Date Claim Closed').should('be.visible')
            cy.contains('Workflow Status').should('be.visible')
            cy.get('table tr:first-child td:nth-child(3) a').click();
            cy.url('Forms/ClaimsMgmt_InjuryClaim_Detail/View').should('include', 'InjuryClaim_Detail/View')
            cy.get('#id-C338AAFF984BCA934A024D03856033').should('be.visible')
            cy.contains('Add Comment').should('be.visible')
            cy.contains('Edit').should('be.visible')
            cy.contains('Add Entry').should('be.visible')
            cy.contains('Clone').should('be.visible')
            cy.contains('Exit').should('be.visible').click()
            cy.url().should('include','Application/ClaimsMgmt/ReviewClaim')
        })
      

       it('Attempt to Clone a Claim ', function() {
            cy.get('.inventory-body').contains('Claim Number')
            cy.get('table tr:first-child td:nth-child(3) a').click();
            cy.url('Forms/ClaimsMgmt_InjuryClaim_Detail/View').should('include', 'InjuryClaim_Detail/View')
            //cy.get('a[href="/Login/LOR_AUSTest/Application/ClaimsMgmt/ReviewClaim/Forms/ClaimsMgmt_InjuryClaim_Detail/Create/f8fa40bd-12af-41a4-bf64-839164c6128e"]').click({force: true});
            cy.get('#CloneActionLink42').click()
            cy.get('#save_action_link').click()
            cy.contains('Please correct the following errors Error - The save cannot be completed because of an existing record with the same ClaimNumber. Click here to see it.')
            cy.get('#CancelActionLink42').click()
            cy.url('Forms/ClaimsMgmt_InjuryClaim_Detail/View').should('include', 'InjuryClaim_Detail/View')
            cy.get('.exit-link').click()
            cy.url('/Application/ClaimsMgmt/ReviewClaim').should('include','ReviewClaim')
            }) 

            /* cy.contains('Edit').click()
            cy.contains('Employee Name').should('be.visible')
            cy.get('#EmployeeName_Clear').click()
            cy.get('#EmployeeName_AssignToMe').click() */
        
      
      it('Clone a Claim after an Edit to Claim Number and Description', function() {
        cy.get('.inventory-body').contains('Claim Number')
        cy.get('table tr:first-child td:nth-child(3) a').click();
        cy.url('Forms/ClaimsMgmt_InjuryClaim_Detail/View').should('include', 'InjuryClaim_Detail/View')
        cy.get('#CloneActionLink42').click()
        cy.contains('New Injury Claim').should('be.visible')
        cy.contains('Claim Number').should('be.visible')
        cy.get('#ClaimNumber').clear()
        //cy.get('a[href="/Login/LOR_AUSTest/Application/ClaimsMgmt/ReviewClaim/Forms/ClaimsMgmt_InjuryClaim_Detail/Create/f8fa40bd-12af-41a4-bf64-839164c6128e"]').click({force: true});
        dynamoPage.enterRandomClaimNumberOption('#ClaimNumber', 10);
        cy.get('#ClaimDes').clear().type('broken finger as I slipped and fell and twisted my ankle')
        cy.get('#save_action_link').click()
        cy.contains('Note: The injury claim has been created successfully.').should('be.visible')

       /*  cy.url('/Application/ClaimsMgmt/ReviewClaim').should('include','ReviewClaim')
        cy.get('#CloneActionLink42').click()
        cy.get('#save_action_link').click()  */
        }) 
      })

            //verify Open Claim is available
           // cy.get('a[href="/Login/LOR_AUSTest/IntelexForms/WorkflowService/ExecuteAction/fad625c8-043a-447c-bd29-5e375b1bc509?recordId=2ac43d75-653e-425a-89dd-6f0e9575e9bb&objectName=ClaimsMgmt_InjuryClaimObject"').click({force: true});
            //verify Cancel Claim is available
           // cy.get('a[href="/Login/LOR_AUSTest/IntelexForms/WorkflowService/ExecuteAction/fad625c8-043a-447c-bd29-5e375b1bc509?recordId=2ac43d75-653e-425a-89dd-6f0e9575e9bb&objectName=ClaimsMgmt_InjuryClaimObject"]').click({force: true});
        
      
            /* it('Attempt to Clone a Claim ', function() {
            cy.get('.inventory-body').contains('Claim Number')
            cy.get('table tr:first-child td:nth-child(3) a').click();
            cy.url('Forms/ClaimsMgmt_InjuryClaim_Detail/View').should('include', 'InjuryClaim_Detail/View')
            //cy.get('a[href="/Login/LOR_AUSTest/Application/ClaimsMgmt/ReviewClaim/Forms/ClaimsMgmt_InjuryClaim_Detail/Create/f8fa40bd-12af-41a4-bf64-839164c6128e"]').click({force: true});
            cy.get('#CloneActionLink42').click()
            cy.get('#save_action_link').click()
            cy.contains('Please correct the following errors Error - The save cannot be completed because of an existing record with the same ClaimNumber. Click here to see it.')
            cy.get('#CancelActionLink42').click()
            cy.url('Forms/ClaimsMgmt_InjuryClaim_Detail/View').should('include', 'InjuryClaim_Detail/View')
            cy.get('.exit-link').click()
            cy.url('/Application/ClaimsMgmt/ReviewClaim').should('include','ReviewClaim')
            }) */


            //cy.get('8d6654bb-3c6f-4ade-9af2-7ab0d113300a').click({force: true})      
   
//            cy.get('#FFD6AC7DE7FC4E509CC417DBE880E659').click({force: true})      
           // cy.get('#ValidationSummary28').should('include','Please correct the following errors Error - Please ensure Date Claim Accepted is entered before proceeding.')


