import dynamoPage from '../pages/dynamo'; // Correct the import path based on the folder structure
import dropdownPage from '../pages/dropdown';
import datepickerPage from '../pages/datepicker';

//import dynamoPage from '../pages/dynamo';

describe ('As a User I want to be add a new Claim and save using the Save and Exit route', () =>{
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
        it('Add new injury claim and Save & Add Entry', function() {
            // Step 1: Enter a random claim number option
      cy.wait(1000)
      dynamoPage.enterRandomClaimNumberOption('#ClaimNumber', 10);
      cy.get('.field-area').should('be.visible')
      cy.contains('Claim Type').should('be.visible')
      // Step 2: Select a random claim type option from a dropdown
      dropdownPage.selectRandomClaimTypeOption('ClaimType');
    
      // Step 3: Enter a claim description
      cy.contains('Claim Description').type('I broke my finger as I slipped and fell while carrying my device');
    
      // Step 4: Select a random past date using a datepicker
      cy.get(datepickerPage.datepickerInput1).then(($input) => {
        cy.wait(1000)
        datepickerPage.selectRandomPastDate($input);
        cy.get('body').click();
        cy.wait(1000); // Adjust the wait time as needed
      // Step 5: Select a random claimant type option from the dropdown
       cy.get('#ClaimantType').then(($select) => {
        dropdownPage.selectRandomClaimantTypeOption('ClaimantType'); // Randomly select an option from the Claimant Type dropdown
        // Step 5: Generate a random claimant type option
        const claimantTypeOptions = ['f82d040e-6ddc-4bbb-aecc-ef93bf934126', 'bc48e5c4-ffb0-4ab4-94af-2d51a15f92b7', '2c60fc31-b9ea-4966-a1e3-4ffd1fc6795c'];
        const randomOptionValue = claimantTypeOptions[Math.floor(Math.random() * claimantTypeOptions.length)];
      
        // Step 6: Handle specific scenarios based on the generated random option
        if (randomOptionValue === 'f82d040e-6ddc-4bbb-aecc-ef93bf934126') {
          // Handle the scenario for Option X (Employee)
          //cy.get('#fld_ConEmployerName.field-wrapper.skip-validate-hidden', { timeout: 5000 }).should('be.visible')
          //cy.contains('Employee Name').should('be.visible')
          cy.get('#EmployeeName_AssignToMe').filter('.entityselector-assignToMeLink').click({force:true});
          //cy.contains('Assign to me').filter('.entityselector-assignToMeLink').click();     
          dropdownPage.selectRandomIsInsuredOption('IsInsured');
          cy.get('#save_add_new_action_link').click()
          cy.contains('Note: The injury claim has been created successfully.')
          cy.contains('Review a Claim').should('be.visible').click()
       
        }
        
        else if (randomOptionValue === 'bc48e5c4-ffb0-4ab4-94af-2d51a15f92b7'){
          // Handle the scenario for Option Y (Contractor)
          cy.contains('Claimant Name').type('John Doe');
          cy.contains('Employer Name').type('Jane Constructions');
          cy.contains('Supervisor').type('James Bond');
          cy.contains('Contact Info').type('01234567890');
          dropdownPage.selectRandomIsInsuredOption('IsInsured');
          cy.get('#save_add_new_action_link').click()
          cy.contains('Note: The injury claim has been created successfully.')
          cy.contains('Review a Claim').should('be.visible').click()
        }
        else if (randomOptionValue === '2c60fc31-b9ea-4966-a1e3-4ffd1fc6795c') {
          // Handle the scenario for Option Z (Visitor)
          cy.contains('Claimant Name').type('John Doe');
          cy.contains('Employer Name').type('Jane Constructions');
          cy.contains('Supervisor').type('James Bond');
          cy.contains('Contact Info').type('01234567890');
          dropdownPage.selectRandomIsInsuredOption('IsInsured');
          cy.get('#save_add_new_action_link').click()
          cy.contains('Note: The injury claim has been created successfully.')
          cy.contains('Review a Claim').should('be.visible').click()
        }
        // Step 7: Perform other steps, such as saving the form or clicking other buttons
        // ...
      }); 
      
      })
      })
    
    
      /* it('Successfully access the form to create a new injury claim and Save & Add Entry', function() {
      }) */
    
      
      
            /* const datepickerInput = datepickerPage.datepickerInput1;
            datepickerPage.selectRandomPastDate(datepickerInput); 
            const datepickerInput = datepickerPage.datepickerInput2;
            datepickerPage.selectRandomPastDate(datepickerInput); 
    
     */
            // Add more selectors for other dropdowns on this page
      // dropdownName: 'uniqueSelector'
      
      // Selects a random option from the dropdown
        // Function code here...
      
      
      // Add more methods or actions specific to this page or feature
    
    
      
    
    
    
    /*  cy.get('#ClaimType').then(($select) => {
              const options = $select.find('option');
              const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
              const randomOption = options[randomIndex];
            
              cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
            }); */
            //cy.get('#ClaimType').select('Project Specific PL through LOR Company').should('have.value', '7aae22b4-291c-4bf2-8bf3-89c4928faa0b')
            /* cy.contains ('Claim Description').should('be.visible')
            cy.contains ('Date Claim Submitted').should('be.visible')
            cy.contains ('Date Claim Accepted').should('be.visible')
            cy.contains ('Assigned Claims Adjuster').should('be.visible')
             */
          /*  it.only('Successfully Select a new location for a claim and confirm', function() {
            cy.get ('#Location_Link').click()
            cy.get('#f5069a07-2239-4a68-8a25-03195e53bb04').should('have.value','Europe').check()
     */
      
          })
