const radioButtonPage = {
    // Severity Radio Buttons
    radioButtonSeverity: {
      radioButton1: '#Severity_1',
      radioButton2: '#Severity_2',
      radioButton3: '#Severity_3',
      radioButton4: '#Severity_4',
      radioButton5: '#Severity_5',
    },
  
    // Shift Radio Buttons
    radioButtonShift: {
      radioButton1: '#Shift_1',
      radioButton2: '#Shift_2',
      radioButton3: '#Shift_3',
    },
  
    // Worker Type Radio Buttons
    radioButtonWorkerType: {
      radioButton1: '#WorkerTypeObj_1',
      radioButton2: '#WorkerTypeObj_2',
      radioButton3: '#WorkerTypeObj_3',
    },
  
    // Select a random severity radio button
    selectRandomSeverityRadioButton() {
      const randomIndex = Math.floor(Math.random() * 5) + 1; // You have 5 options
      cy.get(this.radioButtonSeverity[`radioButton${randomIndex}`]).check().should('be.checked');
    },
  
    // Select a random shift radio button
    selectRandomShiftRadioButton() {
      const randomIndex = Math.floor(Math.random() * 3) + 1; // You have 3 options
      cy.get(this.radioButtonShift[`radioButton${randomIndex}`]).check().should('be.checked');
    },
  
    // Select a random worker type radio button
    selectRandomWorkerTypeRadioButton() {
      const randomIndex = Math.floor(Math.random() * 3) + 1; // You have 3 options
      cy.get(this.radioButtonWorkerType[`radioButton${randomIndex}`]).check().should('be.checked');
    },
  
    // Add more methods or actions specific to this page or feature
  };
  
  export default radioButtonPage;
  





















/* /* const radioButtonPage = {
  //radioButton0: '#Severity_0',
  radioButton1: '#Severity_1', // Class 3
  radioButton2: '#Severity_2', // Class 2
  radioButton3: '#Severity_3', // Class 1
  radioButton4: '#Severity_4', // Category A
  radioButton5: '#Severity_5', // Category B
  radioButton6: '#WorkerTypeObj_1', //Contractor
  radioButton7: '#WorkerTypeObj_2', //Employee/Permanent
  radioButton8: '#WorkerTypeObj_3', //Temporary Worker
  radioButton9: '#Shift_1', //Day
  radioButton10:'#Shift_2', //Evening
  radioButton11: '#Shift_3',//Night
  

  selectRandomRadioButton() {
      const randomIndex = Math.floor(Math.random() * 6); // Since you have 6 radio buttons
      switch (randomIndex) {
          /* case 0:
              cy.get(this.radioButton0).check().should('be.checked');
              break; */
        /*   case 1:
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
          case 6:
              cy.get(this.radioButton6).check().should('be.checked');
              break;
         case 7:
              cy.get(this.radioButton7).check().should('be.checked');
              break;
         case 8:
              cy.get(this.radioButton8).check().should('be.checked');
              break;
         case 9:
              cy.get(this.radioButton9).check().should('be.checked');
              break;
        case 10:
              cy.get(this.radioButton10).check().should('be.checked');
              break;
        case 11:
              cy.get(this.radioButton11).check().should('be.checked');
              break;
          default:
              break;
      }
  },

  // Add more methods or actions specific to this page or feature
};

export default radioButtonPage;  */
