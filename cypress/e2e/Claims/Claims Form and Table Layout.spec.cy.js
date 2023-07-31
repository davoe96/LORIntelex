//import dynamoPage from '../pages/dynamo';

describe ('As a User of the Claim function I want to be assured that the form to add a claim and table and the Review Claims table has the fixtures and layout as so I can assure all will be as expected', () =>{
    beforeEach(() => {
     //cy.clearCache();
     cy.viewport(1280, 720); // Set the viewport to a desktop resolution (e.g., 1280x720)
     //it('Successfully access the form to create a new injury claim', function() {
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
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
            return false
       })
      })
 
   it('Successfully access the form to create a new injury claim and confirm expected layout', function() {
       cy.get('.breadcrumbs')
      cy.contains('Save').should('be.visible')
      cy.contains('Save & Exit').should('be.visible')
      cy.contains('Save & Add Entry').should('be.visible')
      cy.contains ('New Injury Claim').should('be.visible')
      cy.contains ('Injury Claim Details').should('be.visible')
      cy.contains ('Location').should('be.visible')
      cy.contains ('Claim Number').should('be.visible')
      cy.contains ('Claim Type').should('be.visible')
      cy.contains ('Related Injury').should('be.visible')
      cy.contains ('Claim Description').should('be.visible')
      cy.contains ('Date Claim Submitted').should('be.visible')
      cy.contains ('Date Claim Accepted').should('be.visible')
      cy.contains ('Assigned Claims Adjuster').should('be.visible')
      cy.contains ('Claimant Details').should('be.visible')
      cy.contains ('Claimant Type').should('be.visible')
      cy.contains ('Is Privately Insured').should('be.visible')
      cy.contains ('Cancel').should('be.visible').click()
      cy.contains('Review a Claim').click()    
      cy.url().should('include','Application/ClaimsMgmt/ReviewClaim')
      cy.contains ('List All').should('be.visible')
      cy.contains ('Advanced Search').should('be.visible')
      cy.contains ('Actions').should('be.visible')
      cy.get('.header')
      cy.get('.header-filter')
      cy.contains ('Claim Number').should('be.visible')
      cy.contains ('Location').should('be.visible')
      cy.contains ('Date Claim Submitted').should('be.visible')
      cy.contains ('Date Claim Accepted').should('be.visible')
      cy.contains ('Date Claim Closed').should('be.visible')
      cy.contains ('Workflow Status').should('be.visible')
      cy.get('.pager-summary')
      cy.get('#TotalSelectedRows')
      cy.get('.pagerContainer')
      cy.get('.pager')



     Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
          return false 
    }) 
  })
})