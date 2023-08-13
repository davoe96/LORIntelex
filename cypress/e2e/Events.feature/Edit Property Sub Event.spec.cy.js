import dropdownPage from '../pages/dropdown';
import radioButtonPage from '../pages/radiobutton';
import dynamoPage from '../pages/dynamo'; // Correct the import path based on the folder structure



describe ('As a user I want to successfully open the editor for an existing Property Sub Event, and validate the layout and exit', function(){
  describe ('Property Sub Master Editing', () =>{
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

    })

    it('Successfully access the View page for an Property Damage existing Sub Event and Edit', function() {
      /* cy.get('tbody').contains('Environmental Incident')
      cy.get('table tr:first-child td:nth-child(3) a').click(); */
      cy.get('tbody')
      .contains('Property Damage Incident')
      .parents('tr') // Assuming the row is the parent of the cell containing the text
      .find('td:nth-child(3) a')
      .click();
      cy.get('.breadcrumbs')
      cy.url('/Forms/EHSIncidentMang_EnvironIncidentDisabled_Detail/View/')
      cy.contains('Edit').should('be.visible').click()
      cy.contains('Property Damage Incident No').should('be.visible')
      cy.contains('Initial Reporting').should('be.visible')
      //cy.contains('Location').should('include','TEST location do not use')
      //dropdownPage.selectRandomLocationOption('Location');LocationDesc
      dropdownPage.selectRandomSpecificLocationOption('Specific Location');
      radioButtonPage.selectRandomSeverityRadioButton();
      cy.get('#Description').clear().type('Unspeakable situation property damage is enormous')
      cy.get('#fld_SuspectedCause').clear().type('Tremor')
      cy.get('#CorrectiActions').clear().type('Evacuation')
      dropdownPage.selectRandomDamageTypeOption('DamageType')
      cy.get('#DamagedItems').clear().type('Main Building and 3 warehouse ')
      cy.get('#DamaDescription').clear().type('Roofs cave in and foundation sunk leading to wall cracks')
      dropdownPage.selectRandomOwnerOption('Owner')
      cy.get('#OwnerName').clear().type('Joe Bloggs')
      cy.get('#OwnerAddress').clear().type('1 Testville Avenue. Testland QA1 2QA')
      cy.get('#ReportedBy_Clear').click()
      cy.get('#Investigator_AssignToMe').click()
      cy.get('#save_action_link').click()
      cy.contains('Note: The property damage incident has been saved successfully.').should('be.visible')
      cy.contains('Exit').click()
      cy.url().should('include','Application/EHSIncidentMang/Incidents')
    }) 
})
})