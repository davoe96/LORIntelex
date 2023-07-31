const { defineConfig } = require('cypress');
const mochawesome = require('mochawesome');
const reportGenerator = require('mochawesome-report-generator');

module.exports = defineConfig({
  // Your global configuration options here...

  // The 'e2e' object contains your specific test settings
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

    // After the test run, generate the Mochawesome report
    config.on('after:run', (results) => {
      reportGenerator.create(reportOptions(results));
    });

    // Return the modified configuration object
    return config;
  },
});

// Function to set Mochawesome report options
function reportOptions(results) {
  return {
    reportDir: 'mochawesome-report',
    overwrite: false,
    reportTitle: 'Cypress Test Report',
    showPassed: true,
    showFailed: true,
    showPending: true,
    showSkipped: true,
    showHooks: 'failed',
    quiet: true,
    html: true,
    json: false,
    timestamp: getFormattedTimestamp(),
  };
}

// Function to get the current timestamp in a formatted string
function getFormattedTimestamp() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${day}${month}${year}-${hours}${minutes}${seconds}`;
}
