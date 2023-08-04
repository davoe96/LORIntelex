// userAgentDataHandler.js

const userAgentDataHandler = {
  isUserAgentDataSupported: function () {
    return window.navigator.userAgentData !== undefined;
  },

  getUserAgentData: function () {
    if (this.isUserAgentDataSupported()) {
      return window.navigator.userAgentData;
    }
    return null;
  },

  // Add more methods to handle different aspects of user agent data if needed
  // For example, you can have a method to get the browser name, version, platform, etc.
};

export default userAgentDataHandler;
