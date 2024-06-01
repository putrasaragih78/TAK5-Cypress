const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com',
    env: {
      product1: 'computer',
      product2: 'bag',
      product3: 'Hat'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5432,
    viewportHeight: 670,
    viewportWidth: 1010,
    screenshotsFolder: 'cypress/abcd',
    screenshotOnRunFailure: false
  },
});
