import dropdownPage from '../pages/dropdown';

describe('As a user, I want to Create an Event Master and Have it visible in the table for the next steps in the workflow', function () {
  describe('Event Management Creation', () => {
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
     cy.contains('Location (LOR_AUSTest)').click()
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
     it('Successfully Validates the Expected Page and Table Fixtures', function() {
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



  it('Successfully access the Master Event page and confirm its layout', function() {
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


      /*  cy.get('a.systemLink[href^="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents/DefaultView/EHSIncidentMang_IncidentObject/View/"]')
  .eq(0) // Select the first element in the collection
  .click(); */
      //cy.get('a.systemLink[href^="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents/DefaultView/EHSIncidentMang_IncidentObject/View/"]').click({ multiple: true });
//cy.get('tr.data_row') // Select the table row with the class 'data_row'
  //.find('.data-cell.first-column a.systemLink') // Find the link within the specific cell
  //.should('be.visible')
  //.first()
  //.scrollIntoView()
  //.click({ force: true });

    /*   cy.get('.data-cell.first-column') // Select the parent cell with the desired class
  .parent('tr') // Move up to the parent row element
  .get('#SystemLink58 > img') */
  //.find('a.systemLink[href^="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents/DefaultView/EHSIncidentMang_IncidentObject/View/"]') // Find the link within the row
 // .should('be.visible')
 // .first()
 // .click();
      //describe('Clicking on the link element with dynamic system ID', function() {
        //it('clicks on the link based on the class and partial match of href attribute', function() {
      //cy.get('a.systemLink[href^="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents/DefaultView/EHSIncidentMang_IncidentObject/View/"]').should('be.visible')
      //.first().scrollIntoView()

      //.click();
      
      });
      
      //cy.get('img.edit_image[id^="SystemLink"]').click();
//cy.get('edit_image[src="https://static.intelex.com/Version/6.5.180.1/Content/Themes/Raven/images/Edit.png"]').should('be.visible')
//.click(); #SystemLink58 > img
    })
})

    //it('Event page layout', function () {
      //cy.contains('EHS Incident Management')
      //cy.contains('Incidents')
      // Additional test steps specific to this test case
   // })
  

