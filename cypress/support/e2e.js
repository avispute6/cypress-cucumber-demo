// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Handling uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


beforeEach(() => {
  cy.log('I run before every test in every spec file!!!!!!')
})

afterEach(() => {
  cy.log('I run after every test in every spec file!!!!!!')
  Cypress.on('test:after:run', (test) => {
    console.log(test.title.split(":", 1));
    console.log(test.state);
  });
})

after(() => {
  cy.log('I run at end of the test suites !!!!!!')
})