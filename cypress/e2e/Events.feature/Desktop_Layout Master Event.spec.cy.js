describe ('As a User on a desktop device I want to successfully Confirm the layout for the table and the form creation of Event Master. So that the expected fields names and fixture positioning as well as validation of the creation form meets requirement.', function () {
    describe('Event Management Layout', () => {
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
    
it('Confirm expected layout of Events Table', function() {
    cy.get('.breadcrumbs').contains('Incidents')
    cy.get('a[href="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents"]').contains('Incidents')
    cy.get('#fd34f084-520a-4aa7-8c63-7c613772f651').contains('Near Misses')
    cy.get('#35e9367e-767d-451b-82f9-bda484436353').contains('Incident Summary')
    cy.get('.tab-menu').should('be.visible')
    cy.get('#setupMenu').should('be.visible')
    cy.contains('Archive').should('be.visible')
    cy.contains('List All').should('be.visible')
    cy.contains('Advanced Search').should('be.visible')
    cy.contains ('Actions').should('be.visible')
    cy.contains ('Incident No.').should('be.visible')
    cy.contains ('Event Type').should('be.visible')
    cy.contains ('Location').should('be.visible')
    cy.contains ('Date of Incident').should('be.visible')
    cy.contains ('Severity').should('be.visible')
    cy.contains ('Incident Description').should('be.visible')
    cy.contains ('Person Responsible').scrollIntoView().should('be.visible')
    cy.contains ('Workflow Stage').scrollIntoView().should('be.visible')
    cy.contains ('Due Date').should('be.visible')
    cy.contains ('Date Closed/ Cancelled').scrollIntoView().should('be.visible')
     
}) ;

it('Layout of Event Masters Creation Form', function(){
  cy.url('/Application/EHSIncidentMang')
  cy.get('.breadcrumbs').contains('Incidents')
  cy.get('a[href="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents"]').contains('Incidents')
  cy.get('#lnk-d301fcd6-79e4-43f9-b451-f60905e3be58').click()
  cy.contains('Add Entry').click()
  cy.contains ('Submit for Verification').should('be.visible')
  cy.contains ('Save').should('be.visible')
  cy.contains ('Save & Exit').should('be.visible')
  cy.contains ('Cancel').should('be.visible')
  cy.contains('New Master Incident').should('be.visible')
  cy.contains('Initial Reporting').should('be.visible')
  cy.contains('Location').should('be.visible')
  cy.contains('Specific Location').should('be.visible')
  cy.contains('Date and Time of Incident').should('be.visible')
  cy.contains('Initial Severity').should('be.visible')
  cy.contains('Incident Description').should('be.visible')
  cy.contains('Suspected Cause').should('be.visible')
  cy.contains('Immediate Action').should('be.visible')
  cy.contains('Sub Incident Types').should('be.visible')
  cy.contains('Initial Reporter').should('be.visible')
  cy.contains('Date and Time Reported').should('be.visible')
  cy.contains ('Save').click()
  cy.contains('Please correct the following errors Initial Severity - The value for Initial Severity is mandatory.Incident Description - The value for Incident Description is mandatory.')
  .should('be.visible')
  cy.contains('Cancel').click()
  cy.url().should('include','EHSIncidentMang/Incidents/Forms/EHSIncidentMang_Master_Inventory')
  cy.get('#side-menu__open-btn').click()
 })
})
})
