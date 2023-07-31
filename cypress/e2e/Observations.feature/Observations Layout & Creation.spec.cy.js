//import dynamoPage from '../pages/dynamo'; // Correct the import path based on the folder structure
import dropdownPage from '../pages/dropdown';
import datepickerPage from '../pages/datepicker';
import 'cypress-file-upload';


describe ('As a user I want to successfully navigate to the Observation functionality and validate its form and table layout', function(){
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
          cy.get('.search-container').type('observation').click()
          cy.wait(1000)
          cy.contains('.menu-link', 'Observations').click();
         // cy.select("HEALTH AND SAFETY").select(0).invoke("val").should("eq", "Claims Management").debug().click()
         //cy.get('.menu-link ').eq(0).click()
          cy.url().should('include','/Application/Observations')
          cy.contains('New Work Observation').should('be.visible')
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
              return false
         })
        })

        //Access the Observation form and confirm the layout
       it('Access the Work Observation and confirm expected layout of the form and table', function() {
        cy.contains('Observation Details').should('be.visible')
        cy.contains('Location').should('be.visible')
        cy.contains('Safe/Unsafe').should('be.visible')
        cy.contains('Observation Area').should('be.visible')
        cy.contains('Date').should('be.visible')
        cy.contains('Severity').should('be.visible')
        cy.contains('Task List').should('be.visible')
        cy.contains('Comfort Level').should('be.visible')
        cy.contains('Topic Discussed').should('be.visible')
        cy.contains('Worker Feedback').should('be.visible')
        cy.contains('Observer Feedback').should('be.visible')
        cy.contains('Follow Up').should('be.visible')
        cy.contains('Quota').should('be.visible')
        cy.contains('Private Document Attachment').should('be.visible')
        cy.contains('Attach Document').should('be.visible')
        cy.contains('Detach Document').should('be.visible')
        cy.contains('List All').should('be.visible')
        cy.contains('Attachment Name').should('be.visible')
        cy.contains('URL').should('be.visible')
        cy.get('a[href="/Login/LOR_AUSTest/Application/Observations/ListofWorkObservations"]').click()
        cy.contains('Record No.').should('be.visible')
        cy.contains('Job Task').should('be.visible')
        cy.contains('Date').should('be.visible')
        cy.contains('Safe/Unsafe').should('be.visible')
   
      })
        
        }) 
 

  // Perform any additional actions or assertions related to the file upload, if needed
  // For example, you can click on the "Ok" button in the file upload dialog to confirm the upload
  //cy.contains('Ok').click();

  // Your other test steps and assertions for the scenario


// Click the "OK" button to confirm the attachment (if applicable)
//cy.contains('Ok').click();


    /*   // Attach the file using cy.fixture and cy.get
     cy.fixture('sample2.pdf').then(fileContent => {
    cy.get('input[type="file"]').attachFile({
    fileContent: fileContent,
    fileName: 'sample2.pdf',
    mimeType: 'application/pdf'
  });
}); */

// Click the "OK" button to confirm the attachment (if applicable)
// cy.contains('Ok').click();

        

        //cy.upload_file('sample2.pdf', 'application/pdf', 'input[type="file"]');

        //cy.contains('sample2.pdf');
         



    
    
   

