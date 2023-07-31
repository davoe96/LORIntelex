// cypress/support/commands.js
import 'cypress-file-upload';
import 'mochawesome-cypress';

// Optionally, you can add the following to customize the report name and other options
Cypress.Mochawesome.merge({
  // Report options here (optional)

})
Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
  cy.get(selector).then(subject => {
    cy.fixture(fileName, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileBlob) => {
        const testFile = new File([fileBlob], fileName, { type: fileType });
        const event = { dataTransfer: { files: [testFile] } };
        subject[0].dispatchEvent(new Event('change', event));
      })
  })
})


