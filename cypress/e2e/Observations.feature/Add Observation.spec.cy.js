//import dynamoPage from '../pages/dynamo'; // Correct the import path based on the folder structure
import dropdownPage from '../pages/dropdown';
import datepickerPage from '../pages/datepicker';
import 'cypress-file-upload';


describe ('As a user I want to successfully Add an Observation and validate its functional user journey', function(){
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




it('Add a New Work Observation and confirm entry', function() {
    cy.contains('Observation List').click()
    cy.contains('Add Entry').should('be.visible')
    cy.get('#GridCreateActionLink34').click()
    cy.url().should('include','Forms/Observations_WorkObservation_Detail/Create')
    dropdownPage.selectRandomSafeUnsafeOption ('SafeUnsafe')
    dropdownPage.selectRandomObservationAreaOption ('ObservationArea')
    cy.get(datepickerPage.datepickerInput3).then(($input) => {
    datepickerPage.selectRandomPastDate($input);
    cy.get('body').click();
    cy.wait(1000);  // Adjust the wait time as needed
    dropdownPage.selectRandomSeverityOption ('Severity')
// Click on the "Select" link to open the modal
// Get the parent element that contains the entity selector
cy.get('#TaskList_EntitySelector').within(() => {
    // Click on the "Select" link to open the entity selector dialog
    cy.get('.entityselector-selectLink').click();
  });
  
  // Now, find the option with the desired text "Application Demo" and click on it
  /* cy.get('.entityselector-options li')
  .contains('Application Demo', { timeout: 10000 }) // Increase the timeout if needed
  .click();
 */
  // After selecting the option, close the entity selector dialog by clicking on the "Select" link again
  /* cy.get('#TaskList_EntitySelector').within(() => {
    cy.get('.entityselector-selectLink').click();
  }); */
  
  // You can now verify that the correct value "Application Demo" is displayed in the entity selector input
  cy.get('#TaskList_Display').should('have.value', '');
  
    dropdownPage.selectRandomComfortLevelOption ('ComfortLevel')
    dropdownPage.selectRandomTopicsDiscussedOption ('TopicsDiscussed')
    cy.contains ('Worker Feedback').type('900% profit in 6 months from the 91m of last year')
    cy.contains ('Observer Feedback').type('Parent company over 3billion in profit and we consumers are feeling the blunt')
    dropdownPage.selectRandomFollowUpOption('FollowUp')
    dropdownPage.selectRandomQuotaOption ('Quota')
    // Click on the "Attach Document" link to open the file upload dialog
  cy.get('.gridAttachLink').click();
  cy.wait(4000)
  cy.get('input[type="file"]').should('be.visible').then((fileInput) => {

  // Your test scenario for attaching a document
//it('Attach a document', function() {
// Your previous test steps to navigate to the page and click on the link
// Attach the file using cy.fixture and cy.get
cy.fixture('sample2.pdf', 'binary')
.then(Cypress.Blob.binaryStringToBlob)
.then((fileBlob) => {
  const testFile = new File([fileBlob], 'sample2.pdf', { type: 'application/pdf' });
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(testFile);

  cy.get('input[type="file"]').then((subject) => {
    const el = subject[0];
    el.files = dataTransfer.files;
  });
});

// Perform any additional actions or assertions related to the file upload, if needed
// For example, you can click on the "Ok" button in the file upload dialog to confirm the upload
//cy.contains('Ok').click();

// Your other test steps and assertions for the scenario
  })
})
})
})