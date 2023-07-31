const { init } = require('mochawesome');

module.exports = (on, config) => {
  // Initialize the mochawesome reporter
  init(config);

  // Custom Cypress command to upload a file
  Cypress.Commands.add('upload_file', (fileName, fileType = 'application/pdf', selector) => {
    cy.get(selector).then(subject => {
      cy.fixture(fileName, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then((fileBlob) => {
          const testFile = new File([fileBlob], fileName, { type: fileType });
          const event = { dataTransfer: { files: [testFile] } };
          subject[0].dispatchEvent(new Event('change', event));
        });
    });
  });
};
