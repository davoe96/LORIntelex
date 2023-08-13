const utils = require('../../support/utils/utils');

const dynamoPage = {
  claimNumberDynamo: '#ClaimNumber',
  polrecordNumberDynamo: '#PolrecordNumber',

  enterRandomPolRecordNumberOption(selector, length) {
    const randomString = utils.generateRandomString(length);
    cy.get(selector).type(randomString);

    // Custom assertion: Verify the input field contains the generated string
    cy.get(selector).should('have.value', randomString);

    // Custom assertion: Verify the input field is visible
    cy.get(selector).should('be.visible');
  },


  enterRandomClaimNumberOption(selector, length) {
    const randomString = utils.generateRandomString(length);
    cy.get(selector).type(randomString);

    // Custom assertion: Verify the input field contains the generated string
    cy.get(selector).should('have.value', randomString);

    // Custom assertion: Verify the input field is visible
    cy.get(selector).should('be.visible');
  },
};

export default dynamoPage;




/* const utils = require('../../support/utils');

const dynamoPage = {
  claimNumberDynamo: '#ClaimNumber',

  // Your page object elements and functions here...

  // Function to enter a random string in an input field
  enterRandomClaimNumberOption(selector, length) {
    const randomString = utils.generateRandomString(length);
    cy.get(selector).type(randomString);
  },
};

export default dynamoPage;
 */