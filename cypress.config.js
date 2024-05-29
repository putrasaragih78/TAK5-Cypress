const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://demowebshop.tricentis.com',
    env: {
      product1: 'computer',
      product2: 'bag'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 3000,
    viewportHeight: 680,
    viewportWidth:1000,
    screenshotsFolder: 'cypress/abc'
  },
});
