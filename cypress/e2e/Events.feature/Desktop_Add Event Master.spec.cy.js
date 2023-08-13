import '../../support/commands';
import dropdownPage from '../pages/dropdown';
import datepickerPage from '../pages/datepicker';
import radioButtonPage from '../pages/radiobutton';
import IncidentTypePage from '../pages/incidenttype'; 

describe ('As a User on a desktop device I want to successfully Edit an existing Event Master. So that it can be updated as expected', function () {
    describe('Event Management Editor', () => {
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
       cy.get('.search-container').type('Incident').click()
       cy.wait(1000)
       cy.contains('.menu-link', 'EHS Incident Management').click();
       cy.url().should('include','Login/LOR_AUSTest/Application/EHSIncidentMang')
       Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
           return false
      })
     })
     it('Add an Event Master using a desktop resolution', function() {
      cy.get('.breadcrumbs').contains('Incidents');
      cy.get('a[href="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents"]').contains('Incidents');       cy.get('.tab-menu').should('be.visible');
      cy.get('#setupMenu').should('be.visible');
      cy.get('#lnk-d301fcd6-79e4-43f9-b451-f60905e3be58').click();
      cy.contains('Add Entry').should('be.visible').click()
      cy.contains('Submit for Verification').should('be.visible').click()
      cy.contains('Please correct the following errors Initial Severity - The value for Initial Severity is mandatory.Incident Description - The value for Incident Description is mandatory.')
      .should('be.visible')
      cy.contains ('Location').should('be.visible')
      //Randomly select option from dropdown
      dropdownPage.selectRandomSpecificLocationOption('Specific Location');
      // Step 4: Select a random past date using a datepicker
      cy.get(datepickerPage.datepickerInput3).then(($input) => {
      cy.wait(1000)
      datepickerPage.selectRandomPastDate($input);
      cy.get('body').click();
      cy.wait(1000); // Adjust the wait time as needed
      cy.contains('Initial Severity').should('be.visible')
      //Step 5: Select a random initial severity option from the dropdown
      radioButtonPage.selectRandomSeverityRadioButton();
      cy.get('#Description ').type('Its an unspeakable situation medical environmental, property issues')
      cy.contains('Suspected Cause').type('Meteor shower')
      cy.contains('Immediate Action').type('evacuation and medical care')
      const incidentTypesToSelect = [
        { value: '24f3b84c-705a-4088-846a-a42e59e56d54' }, // Environmental Incident
        { value: 'd82335ef-6d7b-4966-9db0-57931820fe71' }, // Injury/Illness
        { value: '2842e3a6-4bf7-4f21-8444-fb51b417a034' }, // Property Damage
        { value: 'a056f71d-c89d-4b4f-a855-7726dcd0d1bd' }, // Vechicle

        // Add more incident types as needed
    ];

    // Call the method from the Page Object to select the incident types
    IncidentTypePage.selectIncidentTypes(incidentTypesToSelect); 
 
    // Add any assertions or further interactions you need
    cy.contains('Clear').filter('.entityselector-clearLink').click();
    cy.contains('Assign to me').filter('.entityselector-assignToMeLink').click();
    cy.contains('Date and Time Reported').get('#DateReported')
    cy.contains ('Save & Exit').click()
    cy.contains('Note: The master incident has been created successfully.').should('be.visible')

});
});
 })
})
