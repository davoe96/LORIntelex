import dropdownPage from '../pages/dropdown';
import radioButtonPage from '../pages/radiobutton';


describe ('As a user I want to successfully open the editor for an existing Master Event, and validate the layout and exit', function(){
    describe ('Master Event Editor Form Layout', () =>{
      //This script enables the logged in session to be retained so all steps can go through the login on the first creation.
      before(function() {
       // cy.viewport(1280, 720); // Set the viewport to a desktop resolution (e.g., 1280x720)
        cy.visit('baseURL')
        cy.login('daboim@laingorourke.com', 'Ari-Ebube-2020');
        cy.visit('baseURL')
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test where is an untraceble application error.
          return false
        })
        cy.contains('Feed').click()
        cy.contains('Apps').click()
        cy.contains('Health and Safety').click()
        cy.contains('EHS Incident Management').click()
        cy.get('.breadcrumbs')
        cy.url('/Login/LOR_AUSTest/Alliance')
    })
    it('Successfully access an existing Master Event via the ID and confirm page layout fixtures', function() {
        cy.get('table tr:first-child td:nth-child(5) a').click();
        cy.get('.breadcrumbs')
        cy.url('/LOR_AUSTest/api/v2/users/me/')
        cy.contains('Submit for Verification').should('be.visible')
       // cy.contains('Cancel').should('be.visible')
        //cy.contains('Close without Investigation').should('be.visible')
        cy.contains('Add Comment').should('be.visible')
        cy.contains('Edit').should('be.visible')
        cy.contains('Archive').should('be.visible')
        cy.contains('Exit').should('be.visible')
        cy.get('#pageoptionsArrowLink')
        cy.get('#newWindow')
        cy.get('#printableView')
        cy.contains('Master Incident No.').should('be.visible')
        cy.contains('Workflow Stage: Draft Workflow Status: Draft Person Responsible: David Aboim Due Date: 21 July 2023')
        cy.get('.wfDiagram').should('be.visible')
        cy.contains('Draft').should('be.visible')
        cy.contains('Verification').should('be.visible')
        cy.contains('Investigation').should('be.visible')
        cy.contains('Approval').should('be.visible')
        cy.contains('Close').should('be.visible')
        cy.contains('Initial Reporting').should('be.visible')
        cy.contains('Sub Incidents').should('be.visible')
        cy.contains('Private Document Attachment').should('be.visible')
        cy.contains('Workflow Tracking').should('be.visible')
        cy.contains('Add Comment').click()
        cy.contains('Add Workflow Comment').should('be.visible')
        cy.get('#comment-editor').type('Please enter your workflow comments')
        cy.get('#CancelBtnDialog').click()
        cy.get('#OkBtnDialog').contains('Ok').click({ force: true })
        cy.contains('Exit').should('be.visible').click()
        cy.url('Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents')
  })


        it('Successfully access the editor for an existing Master Event via the ID and Update the record', function() {
            //cy.url('LOR_AUSTest/Application/EHSIncidentMang/Incidents')
            cy.contains('Incident Description').type('This is an Automation script not Human or AI').click()
            cy.get('table tr:first-child td:nth-child(5) a').click();
            cy.get('.breadcrumbs')
            cy.get('#EditActionLink56').click()
            cy.url('/Forms/EHSIncidentMang_EnvironIncidentDisabled_Detail/Edit/')
            cy.get('#CancelActionLink66').click()
            cy.url('/Forms/EHSIncidentMang_EnvironIncidentDisabled_Detail/View/')
            cy.contains('Submit for Verification').should('be.visible')
            cy.contains('Add Comment').should('be.visible')
            cy.contains('Edit').should('be.visible')
            cy.contains('Archive').should('be.visible')
            cy.contains('Master Incident No.').should('be.visible')
            cy.get('.wfDiagram').should('be.visible')
            cy.contains('Draft').should('be.visible')
            cy.contains('Verification').should('be.visible')
            cy.contains('Investigation').should('be.visible')
            cy.contains('Approval').should('be.visible')
            cy.contains('Close').should('be.visible')
            cy.contains('Initial Reporting').should('be.visible')
            cy.contains('Sub Incidents').should('be.visible')
            cy.contains('Private Document Attachment').should('be.visible')
            cy.contains('Workflow Tracking').should('be.visible')
            cy.contains('Exit').should('be.visible').click()
            cy.url('Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents')
          })
          it('Successfully Displays the First Menu', function () {
            cy.contains('Feed').click()
            cy.contains('Apps')
            cy.contains('Insights')
            cy.contains('David Aboim')
            cy.contains('Location (LOR_AUSTest)')
            Cypress.on('uncaught:exception', (err, runnable) => {
               // returning false here prevents Cypress from failing the test
               return false
             })
             
             // Additional test steps specific to this test case
         })
         it('Successfully Accesses the Events Landing Page', function () {
           cy.contains('Feed').click()
           cy.contains('Apps').click()
           cy.contains('Health and Safety').click()
           cy.contains('EHS Incident Management').click()
           cy.get('.breadcrumbs')
           cy.contains('Archive').should('be.visible')
           cy.contains('List All').should('be.visible')
           cy.contains('Advanced Search').should('be.visible')
           cy.contains('Actions').should('be.visible')
           cy.url ().should ('include','Login/LOR_AUSTest/Application/EHSIncidentMang')
           Cypress.on('uncaught:exception', (err, runnable) => {
              // returning false here prevents Cypress from failing the test
              return false
            })
           // Additional test steps specific to this test case
       
         })
           //validate Page Fixtures
            it('Successfully Validates the Expected Page Fixtures', function() {
             //cy.url ().should ('include','Login/LOR_AUSTest/Application/EHSIncidentMang')
       
             cy.contains('Feed').click()
             cy.contains('Apps').click()
             cy.contains('Health and Safety').click()
             cy.contains('EHS Incident Management').click()
             cy.contains('Archive').should('be.visible')
             cy.contains('List All').should('be.visible')
             cy.contains('Advanced Search').should('be.visible')
             cy.contains('Actions').should('be.visible')
             Cypress.on('uncaught:exception', (err, runnable) => {
           //     // returning false here prevents Cypress from failing the test
                return false
             
           })
         })
       
       
       
         it('Successfully access the Master Event page and confirm the form layout', function() {
           cy.contains('Feed').click()
           cy.contains('Apps').click()
           cy.contains('Health and Safety').click()
           cy.contains('EHS Incident Management').click()
           cy.get('.breadcrumbs')
           cy.contains('Master Incident').click()
           cy.contains('Add Entry').click()
           cy.url().should('include','/Application/EHSIncidentMang/Incidents/Forms/EHSIncidentMang_Master_Detail/Create')
           cy.contains ('Submit for Verification').should('be.visible')
           cy.contains ('Save').should('be.visible')
           cy.contains ('Save & Exit').should('be.visible')
           cy.contains ('Cancel').should('be.visible')
           cy.contains ('Location').should('be.visible')
           cy.contains ('Specific Location').should('be.visible')
           cy.contains ('Date and Time of Incident').should('be.visible')
           cy.contains ('Date and Time of Incident').should('be.visible')
           cy.contains ('Initial Severity').should('be.visible')
           cy.contains ('Incident Description').should('be.visible')
           cy.contains ('Suspected Cause').should('be.visible')
       
       
       
       
       
         })
            // Additional test steps specific to this test case
            it('Successfully Add a Master Event', function() {
             cy.contains('Feed').click()
             cy.contains('Apps').click()
             cy.contains('Health and Safety').click()
             cy.contains('EHS Incident Management').click()
             cy.get('.breadcrumbs')
             cy.contains('Master Incident').click()
             cy.contains('Add Entry').click()
             cy.url().should('include','/Application/EHSIncidentMang/Incidents/Forms/EHSIncidentMang_Master_Detail/Create')
             cy.contains ('Location').should('be.visible')
             cy.get('#SpecifiLocation').select('In transit')
             cy.get('#DateUserEntered_date').clear().type('07/06/2023').click()
             cy.get('#DateUserEntered_time').clear().type('10:00').click()
             cy.get('#Severity_5').check() // Check first radio element
             cy.contains('Incident Description').type('This is an Automation script not Human or AI')
             cy.contains('Suspected Cause').type('This is an Automation script not Human or AI')
             cy.contains('Immediate Action').type('This is an Automation script not Human or AI')
             cy.get('#SuIncidentTypes_0_').check()
             cy.contains('Clear').filter('.entityselector-clearLink').click();
             cy.contains('Assign to me').filter('.entityselector-assignToMeLink').click();
             cy.contains('Date and Time Reported').get('#DateReported')
             cy.contains ('Save & Exit').click()
             cy.get('#Flash10').contains('Note: The master incident has been created successfully.').should('be.visible');
         
       
       
             //cy.get('#DateUserEntered_date').contains('09/04/2022').click();
           //cy.contains ('Incident Description').type('This is an automated creation of a made up event')
           //cy.contains ('Specific Location').should('be.visible')
           //cy.contains ('Suspected Cause').type('A Constraint')   
       
            })
            
            it('Successfully Edit the Location of an existing Master Event ', function() {
             cy.contains('Feed').click()
             cy.contains('Apps').click()
             cy.contains('Health and Safety').click()
             cy.contains('EHS Incident Management').click()
             cy.get('.breadcrumbs')
             cy.contains('Incident Description').type('This is an Automation script not Human or AI').click()
             cy.get('table tr:first-child td:nth-child(5) a').click();
             cy.get('#EditActionLink56').click()
             cy.url('/Forms/EHSIncidentMang_Master_Detail/View/')
             cy.contains('Add Comment').should('be.visible')
             dropdownPage.selectRandomLocationOption('Location');
             cy.contains('Save & Exit').click()
             cy.url('/EHSIncidentMang/Incidents/')
       
    
    
        })

})
})