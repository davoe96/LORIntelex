describe ('As a system with Notifictions configured I want to send out an email. So that when an Action Plan is created and assigned, the assignee receives the expected notification to action', () =>{
    describe ('Action Plan Assignment Notification',() =>{
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
        cy.wait(1000)
        cy.get('a[href="https://preprod-au.intelex.com/Login/LOR_AUSTest/Application/NewSetup"]').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
              return false
    })
    })
   /*  it('Successfully access the Notification setup for Action Plan', function() {
        cy.url().should('include','Application/NewSetup')
        cy.get('.tab-menu')
        cy.get('#mnu-cde6b003-65b0-4779-9404-5856df96b2f0').click()
        cy.get('#lnk-0782b859-e40c-4669-afc9-192b7a9e930a').click()
        cy.url().should('include','NewSetup/SystemAdmin/Notification/Queue')
        cy.get('.breadcrumbs').contains('Queue Base Inventory').should('be.visible')
        cy.get('#sysNotificationInventory_Filter_MessageBase_Template_Value').type('action plan')
  .wait(500) // Adjust the wait time as needed
  .trigger('keypress', { key: 'Enter', force: true });
        cy.get('#sysNotificationInventory_Filter_Recipient_Value').type('Aboim {enter}')
    })
}) */
    
    it('Assignee notifications filter by template, recipient and timestamp', function() {
        cy.url().should('include', 'Application/NewSetup');
        cy.get('.tab-menu');
        cy.get('#mnu-cde6b003-65b0-4779-9404-5856df96b2f0').click();
        cy.get('#lnk-0782b859-e40c-4669-afc9-192b7a9e930a').click();
        cy.url().should('include', 'NewSetup/SystemAdmin/Notification/Queue');
        cy.get('.breadcrumbs').contains('Queue Base Inventory').should('be.visible');    
        // Type 'action plan' in the filter input and press Enter
        cy.get('#sysNotificationInventory_Filter_MessageBase_Template_Value')
            .type('action plan{enter}', { force: true });
            cy.get('#sysNotificationInventory_Filter_Recipient_Value').type('Aboim {enter}')
            cy.get('#MessageBase_Template_ID').click({force:true})
            cy.get('#TemplateColumn29').click()
            cy.get('select[id="sysNotificationInventory_Paging_PageSize"]').select('500').should('have.value', '500')

        // Initialize variables to store the latest timestamp and its row
                let latestTimestamp = null;
                let rowWithLatestTimestamp = null;
                // Iterate through each row in the table
                cy.get('table tbody tr.data_row').each(($row) => {
                    // Get the text from columns 3, 5, and 6
                    const Template = $row.find('td:nth-child(3)').text();
                    const Recipient = $row.find('td:nth-child(5)').text();
                    const datecreated = $row.find('td:nth-child(6)').text();
            
                    // Check if the text matches your criteria for Recipient and Template
                    if (Recipient.includes('David Aboim') && Template.includes('Action Plan assigned to you.')) {
                        // Get the datetimestamp from column 6
                        const rowTimestamp = new Date(datecreated);
            
                        // Update the latest timestamp and its row if it's null or greater than the current row's timestamp
                        if (latestTimestamp === null || rowTimestamp > latestTimestamp) {
                            latestTimestamp = rowTimestamp;
                            rowWithLatestTimestamp = $row;
                        }
                    }
                }).then(() => {
                    // After iterating through all rows, click on the "Recipient" column of the row with the latest timestamp and matching Recipient
                    if (rowWithLatestTimestamp) {
                        rowWithLatestTimestamp.find('td:nth-child(3)').click({ force: true }); // Click on the "Recipient" column
                    } 
                });
            })

 it('Submission notifications filter by template, recipient and timestamp', function() {
                cy.url().should('include', 'Application/NewSetup');
                cy.get('.tab-menu');
                cy.get('#mnu-cde6b003-65b0-4779-9404-5856df96b2f0').click();
                cy.get('#lnk-0782b859-e40c-4669-afc9-192b7a9e930a').click();
                cy.url().should('include', 'NewSetup/SystemAdmin/Notification/Queue');
                cy.get('.breadcrumbs').contains('Queue Base Inventory').should('be.visible');    
                // Type 'action plan' in the filter input and press Enter
                cy.get('#sysNotificationInventory_Filter_MessageBase_Template_Value')
                    .type('Action Plan has been submitted{enter}', { force: true });
                    cy.get('#sysNotificationInventory_Filter_Recipient_Value').type('Aboim {enter}')
                    cy.get('#MessageBase_Template_ID').click({force:true})
                    cy.get('#TemplateColumn29').click()
                    cy.get('select[id="sysNotificationInventory_Paging_PageSize"]').select('500').should('have.value', '500')
                    // Initialize variables to store the latest timestamp and its row
                    let latestTimestamp = null;
                    let rowWithLatestTimestamp = null;
                    // Iterate through each row in the table
                    cy.get('table tbody tr.data_row').each(($row) => {
                        // Get the text from columns 3, 5, and 6
                        const Template = $row.find('td:nth-child(3)').text();
                        const Recipient = $row.find('td:nth-child(5)').text();
                        const datecreated = $row.find('td:nth-child(6)').text();
                
                        // Check if the text matches your criteria for Recipient and Template
                        if (Recipient.includes('David Aboim') && Template.includes('Action Plan has been submitted')) {
                            // Get the datetimestamp from column 6
                            const rowTimestamp = new Date(datecreated);
                
                            // Update the latest timestamp and its row if it's null or greater than the current row's timestamp
                            if (latestTimestamp === null || rowTimestamp > latestTimestamp) {
                                latestTimestamp = rowTimestamp;
                                rowWithLatestTimestamp = $row;
                            }
                        }
                    }).then(() => {
                        // After iterating through all rows, click on the "Recipient" column of the row with the latest timestamp and matching Recipient
                        if (rowWithLatestTimestamp) {
                            rowWithLatestTimestamp.find('td:nth-child(3)').click({ force: true }); // Click on the "Recipient" column
                        } 
                        });
        });


it('Local Action Plan notifications filter by template, recipient and timestamp', function() {
     cy.url().should('include', 'Application/NewSetup');
     cy.get('.tab-menu');
     cy.get('#mnu-cde6b003-65b0-4779-9404-5856df96b2f0').click();
     cy.get('#lnk-0782b859-e40c-4669-afc9-192b7a9e930a').click();
     cy.url().should('include', 'NewSetup/SystemAdmin/Notification/Queue');
     cy.get('.breadcrumbs').contains('Queue Base Inventory').should('be.visible');    
            // Type 'action plan' in the filter input and press Enter
     cy.get('#sysNotificationInventory_Filter_MessageBase_Template_Value')
     .type('Local Action Plan assigned to you.{enter}', { force: true });
     cy.get('#sysNotificationInventory_Filter_Recipient_Value').type('Aboim {enter}')
     cy.get('#MessageBase_Template_ID').click({force:true})
     cy.get('#TemplateColumn29').click()
     cy.get('select[id="sysNotificationInventory_Paging_PageSize"]').select('500').should('have.value', '500')
                // Initialize variables to store the latest timestamp and its row
     let latestTimestamp = null;
     let rowWithLatestTimestamp = null;
                // Iterate through each row in the table
     cy.get('table tbody tr.data_row').each(($row) => {
                    // Get the text from columns 3, 5, and 6
      const Template = $row.find('td:nth-child(3)').text();
      const Recipient = $row.find('td:nth-child(5)').text();
      const datecreated = $row.find('td:nth-child(6)').text();
            
                    // Check if the text matches your criteria for Recipient and Template
                    if (Recipient.includes('David Aboim') && Template.includes('Local Action Plan assigned to you.')) {
                        // Get the datetimestamp from column 6
                        const rowTimestamp = new Date(datecreated);
            
                        // Update the latest timestamp and its row if it's null or greater than the current row's timestamp
                        if (latestTimestamp === null || rowTimestamp > latestTimestamp) {
                            latestTimestamp = rowTimestamp;
                            rowWithLatestTimestamp = $row;
                        }
                    }
                }).then(() => {
                    // After iterating through all rows, click on the "Recipient" column of the row with the latest timestamp and matching Recipient
                    if (rowWithLatestTimestamp) {
                        rowWithLatestTimestamp.find('td:nth-child(3)').click({ force: true }); // Click on the "Recipient" column
                    } 
                    });
    });
    })
})
    

    



