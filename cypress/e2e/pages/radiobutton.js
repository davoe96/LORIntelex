const radioButtonPage = {
  //radioButton0: '#Severity_0',
  radioButton1: '#Severity_1', // Class 3
  radioButton2: '#Severity_2', // Class 2
  radioButton3: '#Severity_3', // Class 1
  radioButton4: '#Severity_4', // Category A
  radioButton5: '#Severity_5', // Category B

  selectRandomRadioButton() {
      const randomIndex = Math.floor(Math.random() * 6); // Since you have 6 radio buttons
      switch (randomIndex) {
          /* case 0:
              cy.get(this.radioButton0).check().should('be.checked');
              break; */
          case 1:
              cy.get(this.radioButton1).check().should('be.checked');
              break;
          case 2:
              cy.get(this.radioButton2).check().should('be.checked');
              break;
          case 3:
              cy.get(this.radioButton3).check().should('be.checked');
              break;
          case 4:
              cy.get(this.radioButton4).check().should('be.checked');
              break;
          case 5:
              cy.get(this.radioButton5).check().should('be.checked');
              break;
          default:
              break;
      }
  },

  // Add more methods or actions specific to this page or feature
};

export default radioButtonPage;
