const radioButtonPage = {
    radioButton1: '#Severity_0',
    radioButton2: '#Severity_1',
    radioButton3: '#Severity_2',
    radioButton3: '#Severity_3',
    radioButton3: '#Severity_4',
    radioButton3: '#Severity_5',


  
    selectRandomRadioButton() {
      const randomIndex = Math.floor(Math.random() * 3) + 1;
      switch (randomIndex) {
        case 1:
          cy.get(this.radioButton0).check().should('be.checked');
          break;
          cy.get(this.radioButton1).check().should('be.checked');
          break;
        case 2:
          cy.get(this.radioButton2).check().should('be.checked');
          break;
        case 3:
          cy.get(this.radioButton3).check().should('be.checked');
          break;
          cy.get(this.radioButton4).check().should('be.checked');
          break;
          cy.get(this.radioButton5).check().should('be.checked');
          break;
        default:
          break;
      }
    },
  
    // Add more methods or actions specific to this page or feature
  };
  
  export default radioButtonPage;
  