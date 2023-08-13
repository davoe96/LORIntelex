import '../../support/commands';

describe ('As a User on a desktop device I want to successfully Submit an existing Event Master for Verification. So that it can be confirm the expected walkthrough of the workflow', function () {
    describe('Event Verification', () => {
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
     it('Submit Event Master for Verification', function() {
        cy.get('.breadcrumbs').contains('Incidents');
        cy.get('a[href="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents"]').contains('Incidents');
        cy.get('.tab-menu').should('be.visible');
        cy.get('#setupMenu').should('be.visible');
        //cy.get('#lnk-d301fcd6-79e4-43f9-b451-f60905e3be58').click();
        cy.contains('Incident Description').type('This is an Automation script not Human or AI').click()
        cy.get('table tr:first-child td:nth-child(5) a').click();
        cy.get('.breadcrumbs')
        cy.get('#id-BAAA29850C884405A1A37F8936142E71').should('be.visible').click({force:true})
     })
    })
})