import moment from 'moment';

const datepickerPage = {
  datepickerInput1: '#DateSubmitted',
  datepickerInput2: '#DateAccepted',
  datepickerInput3: '#DateUserEntered_date',
  datepickerInput4: '#DueDate',
  datepickerInput5: '#StartDate',
   
  
  selectRandomPastDate(datepickerInput) {
    const currentDate = moment().startOf('day');
    const randomPastDate = moment().subtract(Math.floor(Math.random() * (currentDate.diff(moment(), 'days') + 1)), 'days');
    const dateToSelect = randomPastDate.format('DD/MM/YYYY');
    cy.wait(1000)
    //const randomPastDate = moment().subtract(Math.floor(Math.random() * (currentDate.diff(moment(), 'days') + 1)), 'days');
    //const dateToSelect = moment(Math.random() < 0.5 ? currentDate : randomPastDate).format('DD/MM/YYYY');
    cy.get(datepickerInput).clear().type(dateToSelect, { force: true });
    // Add more actions if necessary, such as closing the date picker modal
    
    // You can also add assertions to verify the selected date if needed
    // For example:
    // cy.get(datePickerInput).should('have.value', dateToSelect);
  },
  
  // Add more methods or actions specific to the date picker
};

export default datepickerPage;
