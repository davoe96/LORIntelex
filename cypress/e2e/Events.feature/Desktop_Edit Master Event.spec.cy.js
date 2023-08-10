import '../../support/commands';

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
     it('Edit Event Master by updating some fields and reassigning via All Events Table', function() {
        cy.get('.breadcrumbs').contains('Incidents');
        cy.get('a[href="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents"]').contains('Incidents');
        cy.get('.tab-menu').should('be.visible');
        cy.get('#setupMenu').should('be.visible');
        //cy.get('#lnk-d301fcd6-79e4-43f9-b451-f60905e3be58').click();
        cy.contains('Incident Description').type('This is an Automation script not Human or AI').click()
        cy.get('table tr:first-child td:nth-child(5) a').click();
        cy.get('.breadcrumbs')
        cy.get('#EditActionLink56').click()
        cy.url().should('include','Forms/EHSIncidentMang_Master_Detail/Edit/')
        cy.get('#LocationDesc').clear().type('Double Tap on site');
        cy.get('#Description').clear().type('All hell broke loose and an edit was required to confirm it will work');
        cy.get('#SuspectedCause').clear().type('A Tremor that shook the whole ground resulting in the not properly installed scaffolding to collapse')
        cy.contains('Clear').filter('.entityselector-clearLink').click();
        cy.contains('Assign to me').filter('.entityselector-assignToMeLink').click();
        cy.contains('Date and Time Reported').get('#DateReported')
        cy.contains ('Save & Exit').click()
        cy.contains('Note: The master incident has been saved successfully.').should('be.visible')
     })
    
    
     
     
     it('Edit via Master Event Table', function() {
         cy.get('.breadcrumbs').contains('Incidents');
         cy.get('a[href="/Login/LOR_AUSTest/Application/EHSIncidentMang/Incidents"]').contains('Incidents');
         cy.get('.tab-menu').should('be.visible');
         cy.get('#setupMenu').should('be.visible');
         cy.get('#lnk-d301fcd6-79e4-43f9-b451-f60905e3be58').click();
        
            // Wrap the whole operation in a promise
         cy.get('tbody tr.data_row').then(($rows) => {
                let linkClicked = false;
        
                // Loop through the rows
                for (let i = 0; i < $rows.length; i++) {
                    const $row = $rows.eq(i);
                    const descriptionColumn = $row.find('td:nth-child(7)');
                    const workflowStageColumn = $row.find('td:nth-child(9)');
                
                    const descriptionText = descriptionColumn.text().trim();
                    const workflowStageText = workflowStageColumn.text().trim();
                
                    if (descriptionText === 'This is an Automation script not Human or AI' &&
                        workflowStageText === 'Draft' && !linkClicked) {
                        // Perform click on the row
                        $row.click();
                        linkClicked = true;
                        break; // Exit the loop after the first successful click
                    }
                }
        
                // Perform click on the link if the row was clicked
                if (linkClicked) {
        cy.get('table tr:first-child td:nth-child(2) a').click();
                    // Add assertions or actions that you want to perform on the new page
                    // For example:
        cy.url().should('include', '/Forms/EHSIncidentMang_Master_Detail/View');
                    // Add more assertions or actions as needed
        cy.get('#EditActionLink56').should('be.visible').click() 
        cy.url().should('include','/Forms/EHSIncidentMang_Master_Detail/Edit/') 
        cy.get('#LocationDesc').clear().type('Double Tap on site');
        cy.get('#Description').clear().type('All hell broke loose and an edit was required to confirm it will work');
        cy.get('#SuspectedCause').clear().type('A Tremor that shook the whole ground resulting in the not properly installed scaffolding to collapse')
        cy.contains('Clear').filter('.entityselector-clearLink').click();
        cy.contains('Assign to me').filter('.entityselector-assignToMeLink').click();
        cy.contains('Date and Time Reported').get('#DateReported')
        cy.contains ('Save & Exit').click()
        cy.contains('Note: The master incident has been saved successfully.').should('be.visible')

               
               
               
               
               
               
                }

            })
        })
    })
})
    
  