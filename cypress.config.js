const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  
  env: {
    email: "#email",
    password: "#password"

  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://react-redux.realworld.io/#/login?_k=8alav0",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  
});
