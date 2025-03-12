const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 1080,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  defultCommandTimeout: 60000,
  execTimeout: 15000,
  requestTimeOut: 150000,
  responseTimeout: 150000,
  video: true,
  screenshotOnRunFailure: false,
  failOnStatusCode: false,
  chromiumSecurity: false,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results/mocha',
    overwrite: false,
    html: false,
    json: true,
  },
  downloadsFolder: './cypress/downloads',
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  projectId: 'ppxgyd',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://abr.business.gov.au/',
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
