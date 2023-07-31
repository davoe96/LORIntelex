import dropdownPage from '../pages/dropdown';
import radioButtonPage from '../pages/radiobutton';


/* describe ('As a user I want to successfully open the editor for an existing Sub Event, and validate the layout and exit', function(){
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
    })
}) */
describe ('Add Orphan Sub Event', () =>{
    beforeEach(() => {
        //cy.clearCache();
     cy.viewport(1280, 720); // Set the viewport to a desktop resolution (e.g., 1280x720)
        cy.visit('baseURL')
        cy.login('daboim@laingorourke.com', 'Ari-Ebube-2020');
        cy.visit('baseURL')
        cy.get('.search-container').type('EHS Incident Management').click()
        cy.get('.menu-link ').click()
        cy.url().should('include','/LOR_AUSTest/Application/EHSIncidentMang')
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
            return false
       })
 
    })
it('Successfully access the Dashboard Menu and Add an Orphan Sub Event', function() {
    cy.get('tab-menu tab-menu-collapsed')
    //cy.get('#tv-f95d74de-db2d-4271-8ca7-727f98d69dbb') // Replace '.menu-container' with the actual selector for the menu element
  .find('link-items') // Assuming the menu items are represented as list items (li)
  .then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    const randomOption = $options.eq(randomIndex);
    const optionText = randomOption.text().trim();

    cy.wrap(randomOption).click();

    // Now you can use the selected optionText for any further checks or assertions
    // For example:
    cy.contains('You selected: ' + optionText).should('be.visible');
  });


})
    })