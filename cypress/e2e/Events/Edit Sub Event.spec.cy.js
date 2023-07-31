import dropdownPage from '../pages/dropdown';
import radioButtonPage from '../pages/radiobutton';


describe ('As a user I want to successfully open the editor for an existing Sub Event, and validate the layout and exit', function(){
    describe ('Sub Master Editing', () =>{
      //This script enables the logged in session to be retained so all steps can go through the login on the first creation.
      this.beforeEach(function() {
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
       //cy.contains('Incident Description').type('This is an Automation script not Human or AI').click()
       // Find the hyperlink element
       //cy.get('table tr:first-child td:nth-child(3) a')
       //.click();
       // cy.get('a.systemLink[href^="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents/DefaultView/EHSIncidentMang_IncidentObject/View/"]')
        //.eq(3) // Select the first element in the collection
        //.click();
        //cy.get('.breadcrumbs')
        //cy.contains('Exit').should('be.visible').click()

      })

      it('Successfully access the View page for an existing Sub Event and confirm page layout fixtures via the ID', function() {
        cy.get('table tr:first-child td:nth-child(3) a').click();
        cy.get('.breadcrumbs')
        cy.url('/Forms/EHSIncidentMang_EnvironIncidentDisabled_Detail/View/')
        cy.contains('Edit').should('be.visible')
        cy.contains('Archive').should('be.visible')
        cy.contains('Environmental Incident No.').should('be.visible')
        cy.contains('Initial Reporting').should('be.visible')
        cy.contains('Spill/Release Details').should('be.visible')
        cy.contains('Materials').should('be.visible')
        cy.contains('External Reporting Details').should('be.visible')
        cy.contains('Investigation Details').should('be.visible')
        cy.contains('Related Incidents').should('be.visible')
        cy.contains('Private Document Attachment').should('be.visible')
        cy.contains('Exit').click()
        cy.url('/Application/EHSIncidentMang/Incidents')
      })





      it('Successfully access the editor for an existing Sub Event Via the Pencil and confirm page layout fixtures', function() {
        //Find the hyperlink element
        //cy.get('table tr:first-child td:nth-child(3) a').click();
        cy.get('table tr:first-child td:nth-child(2) a').click()
        console.log('Step 1: Starting the test...');

        cy.get('.breadcrumbs')
       // cy.get('.systemLink edit-link').click()
        cy.url('/Forms/EHSIncidentMang_EnvironIncidentDisabled_Detail/Edit/')
        cy.get('#CancelActionLink40').click()
        console.log('Step 1: Starting the test...');

        cy.url('/Forms/EHSIncidentMang_EnvironIncidentDisabled_Detail/View/')
        //cy.contains('Submit for Verification').should('be.visible')
       // cy.contains('Add Comment').should('be.visible')
        cy.contains('Edit').should('be.visible')
        cy.contains('Archive').should('be.visible')
        cy.contains('Environmental Incident No.').should('be.visible')
        cy.get('.wfDiagram').should('be.visible')
        cy.contains('Draft').should('be.visible')
        cy.contains('Verification').should('be.visible')
        cy.contains('Investigation').should('be.visible')
        cy.contains('Approval').should('be.visible')
       // cy.contains('Close').should('be.visible')
        cy.contains('Initial Reporting').should('be.visible')
        cy.contains('Spill/Release Details').should('be.visible')
        cy.contains('Materials').should('be.visible')
        cy.contains('External Reporting Details').should('be.visible')
        cy.contains('Investigation Details').should('be.visible')
        cy.contains('Related Incidents').should('be.visible')
        cy.contains('Private Document Attachment').should('be.visible')
        cy.contains('Exit').should('be.visible').click()
        cy.url('Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents')
       })

      it('Successfully access the editor for an existing Sub Event and edit some fields and save', function() {
        cy.url('Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents')
        cy.get('table tr:first-child td:nth-child(2) a').click()
        cy.url('/Forms/EHSIncidentMang_Master_Detail/View/')
        dropdownPage.selectRandomLocationOption('Location');
        dropdownPage.selectRandomSpecificLocationOption('Specific Location');
        cy.contains('Other Location').type('Ground Zero')
        radioButtonPage.selectRandomRadioButton();
        cy.contains('Suspected Cause').type('flooring')
        cy.contains('Immediate Action').type('medical attention and repairs to floor')
        cy.contains('Spill/Release Details').should('be.visible')
        dropdownPage.selectRandomTypeOption('Type')
        cy.contains('External Reporting Details').should('be.visible')
        dropdownPage.selectRandomOutsideAgencyOption('OutsideAgency')
        dropdownPage.selectRandomInvestRequestedOption('InvestRequested')
        cy.contains('Save & Exit').click()
        cy.url('/EHSIncidentMang/Incidents/')



      })
      
            })
      
          })