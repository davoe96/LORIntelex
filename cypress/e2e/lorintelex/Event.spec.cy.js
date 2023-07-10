describe('As a user, I want to Create an Event and take it through the workflow to closed', function () {
  describe('Successful Event Completion', () => {
    beforeEach(() => {
      cy.visit('baseURL')
      cy.login('daboim@laingorourke.com', 'Ari-Ebube-2020');
      cy.visit('Login/LOR_AUSTest/Application/EHSIncidentMang')
      cy.url ().should ('include','Login/LOR_AUSTest/Alliance')
      cy.contains('Feed')
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })

      // Additional setup steps or common preconditions can be added here
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




     // Additional test steps specific to this test case
 })

    //it('Event page layout', function () {
      //cy.contains('EHS Incident Management')
      //cy.contains('Incidents')
      // Additional test steps specific to this test case
   // })
  })

