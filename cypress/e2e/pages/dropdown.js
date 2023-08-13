const dropdownPage = {
   claimTypeDropdown: '#ClaimType',
   claimantTypeDropdown: '#ClaimantType',
   isInsuredDropdown: '#IsInsured',  
   locationDropdown: '#Location',     
   specificLocationDropdown: '#SpecifiLocation',   
   typeDropdown: '#Type',
   outsideAgencyDropdown:'#OutsideAgency',
   investRequestedDropdown: '#InvestRequested',
   safeUnsafeDropdown: '#SafeUnsafe',
   observationAreaDropdown: '#ObservationArea',
   severityDropdown: '#Severity',
   comfortLevelDropdown: '#ComfortLevel',
   topicsDiscussedDropdown: '#TopicsDiscussed',
   followUpDropdown: '#FollowUp',
   quotaDropdown: '#Quota',
  cparttypeidDropdown: '#CPARTypeID',
   reviewtypeDropdown: '#ReviewType',
   vehicleincidentCharacteristicsDropdown: '#IncidentChar',
   damagetoVehicleDropdown: '#DamagetoVehicle',
   extentofDamageDropdown: '#ExtentofDamage',
   weatheConditionDropdown: '#WeatheCondition',
   roadConditionDropdown: '#RoadCondition',
   visibilityDropdown: '#Visibility',
   lightConditionsDropdown: '#LightConditions',
   reportetoPoliceDropdown: '#ReportetoPolice',
   damageTypeDropdown: '#DamageType',
   ownerDropdown: '#Owner',

// Add more selectors for other elements on this page
  // dropdownName: 'uniqueSelector'
  selectRandomOwnerOption() {
    cy.get(this.ownerDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomDamageTypeOption() {
    cy.get(this.damageTypeDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomReportetoPoliceOption() {
    cy.get(this.reportetoPoliceDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomLightConditionsOption() {
    cy.get(this.lightConditionsDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomVisibilityOption() {
    cy.get(this.visibilityDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomRoadConditionOption() {
    cy.get(this.roadConditionDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomWeatheConditionOption() {
    cy.get(this.weatheConditionDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomExtentofDamageOption() {
    cy.get(this.extentofDamageDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomDamagetoVehicleOption() {
    cy.get(this.damagetoVehicleDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomVehicleIncidentCharacteristicsOption() {
    cy.get(this.vehicleincidentCharacteristicsDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomReviewTypeOption() {
    cy.get(this.reviewtypeDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomCPARTypeIDOption() {
    cy.get(this.cparttypeidDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomQuotaOption() {
    cy.get(this.quotaDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomFollowUpOption() {
    cy.get(this.followUpDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomTopicsDiscussedOption() {
    cy.get(this.topicsDiscussedDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomComfortLevelOption() {
    cy.get(this.comfortLevelDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  
  selectRandomSeverityOption() {
    cy.get(this.severityDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomObservationAreaOption() {
    cy.get(this.observationAreaDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomSafeUnsafeOption() {
    cy.get(this.safeUnsafeDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomClaimTypeOption() {
    cy.get(this.claimTypeDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomClaimantTypeOption() {
    cy.get(this.claimantTypeDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomIsInsuredOption() {
    cy.get(this.isInsuredDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomLocationOption() {
    cy.get(this.locationDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },

  selectRandomSpecificLocationOption() {
    cy.get(this.specificLocationDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },

  selectRandomTypeOption() {
    cy.get(this.typeDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomOutsideAgencyOption() {
    cy.get(this.outsideAgencyDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  selectRandomInvestRequestedOption() {
    cy.get(this.investRequestedDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
  
    selectRandomClaimantTypeOption() {
      cy.get(this.claimantTypeDropdown).then(($select) => {
        const options = $select.find('option');
        const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
        const randomOption = options[randomIndex];
  
        cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
  
        // Based on the selected option, check if additional elements appear and handle each scenario accordingly
        const selectedOption = randomOption.value;
  
        if (selectedOption === 'f82d040e-6ddc-4bbb-aecc-ef93bf934126') {
          cy.contains('Employee Name').should('be.visible')
          cy.contains('Clear').filter('.entityselector-clearLink')
          cy.contains('Assign to me').filter('.entityselector-assignToMeLink')        
            // Handle the scenario for Option X
          // Set the specific field for Option X
        } else if (selectedOption === 'bc48e5c4-ffb0-4ab4-94af-2d51a15f92b7'){ 
          // Handle the scenario for Option Y and Option Z
          // Set the specific field for Option Y and Option Z
          // Use cy.contains() to locate the elements by their text content and check their visibility
          cy.contains('Claimant Name').should('be.visible', { timeout: 5000 });
          cy.contains('Employer Name').should('be.visible', { timeout: 5000 });
          cy.contains('Supervisor').should('be.visible', { timeout: 5000 });
          cy.contains('Contact Info').should('be.visible', { timeout: 5000 });
        }
        else if(selectedOption === '2c60fc31-b9ea-4966-a1e3-4ffd1fc6795c') {
          cy.contains('Claimant Name').should('be.visible', { timeout: 5000 });
          cy.contains('Employer Name').should('be.visible', { timeout: 5000 });
          cy.contains('Supervisor').should('be.visible', { timeout: 5000 });
          cy.contains('Contact Info').should('be.visible', { timeout: 5000 });
        }
          // Note: The actual input elements may have different identifiers. Adjust them accordingly.
          // cy.get('input[name="ClaimantName"]').should('be.visible', { timeout: 5000 });
          // cy.get('input[name="EmployerName"]').should('be.visible', { timeout: 5000 });
          // cy.get('input[name="Supervisor"]').should('be.visible', { timeout: 5000 });
          // cy.get('input[name="ContactInfo"]').should('be.visible', { timeout: 5000 });
       else {
          // Handle other scenarios or provide a default behavior
          // ...
        }
      });
    },
  };
  
  export default dropdownPage;
  

  
    
  
  
  
    
   
  
  
  
  
  // Add more methods or actions specific to this page or feature
  // For example:
  // clickButton() {
  //   cy.get('.button-selector').click();
  // },
  // fillForm() {
  //   cy.get('#input-field').type('Text');
  //   // Add more actions to fill the form
  // },




