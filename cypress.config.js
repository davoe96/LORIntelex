const { defineConfig } = require('cypress');
const mochawesome = require('mochawesome');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://preprod-au.intelex.com/Login/?returnUrl=%2FLogin%2Foauth%2FLOR_AUSTest%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3DV6%26redirect_uri%3Dhttps%253a%252f%252fpreprod-au.intelex.com%252fLogin%252fLOR_AUSTest%252fUser%252fSignIn%253freturnUrl%253d%25252FLogin%25252FLOR_AUSTest%25252F%26state%3DTFbX3YNagtIPbnyQrRJJOg%253d%253d%26tzName%3DBritish%2520Summer%2520Time%26tzOffSet%3D00%253A00%253A00',
    projectId: '75q3nh',
    experimentalCspAllowList: ['default-src', 'script-src', 'script-src-elem'],
    chromeWebSecurity: false,
    experimentalSourceRewriting: false,
    waitForAnimations: true,
  },

  // The 'on' object contains various event listeners
  // 'config' is the resolved Cypress configuration object
  on: (config) => {
    // Initialize the mochawesome reporter
    mochawesome.merge();

    // Add custom Cypress command to upload a file
    Cypress.Commands.add('upload_file', (fileName, fileType = '', selector) => {
      // Custom file upload command implementation...
    });

    // Use mochawesome reporter for the Cypress configuration
    config.reporter = 'mochawesome';

    // Use cypress-multi-reporters to generate multiple reports
    config.reporterOptions = {
      reporters: {
        mochawesome: mochawesomeOptions.reporterOptions,
        'mochawesome-history': {
          reporterOptions: {
            reportDir: 'mochawesome-report-history',
            overwrite: false,
            html: true,
            json: true,
            quiet: true,
            code: true,
            showPassed: true,
            showFailed: true,
            showPending: true,
            showSkipped: true,
            showHooks: 'failed',
          },
        },
      },
    };

    // Return the modified configuration object
    return config;
  },
});
