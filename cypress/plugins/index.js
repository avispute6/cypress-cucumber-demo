/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const path = require('path');
const fs = require('fs');

const downloadDirectory = './cypress/downloads';

const findPDF = (PDFfilename) => {
  const PDFFileName = `${downloadDirectory}/${PDFfilename}`;
  const contents = fs.existsSync(PDFFileName);
  return contents;
};

const hasPDF = (PDFfilename, ms) => {
  const delay = 10;
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      return reject(
        new Error(`Could not find PDF ${downloadDirectory}/${PDFfilename}`)
      );
    }
    const found = findPDF(PDFfilename);
    if (found) {
      return resolve(true);
    }
    setTimeout(() => {
      hasPDF(PDFfilename, ms - delay).then(resolve, reject);
    }, delay);
  });
};

const cucumber = require('cypress-cucumber-preprocessor').default
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  getCompareSnapshotsPlugin(on, config);
  on('task', {
    isExistPDF(PDFfilename, ms = 4000) {
      console.log(
        `looking for PDF file in ${downloadDirectory}`,
        PDFfilename,
        ms
      );
      return hasPDF(PDFfilename, ms);
    },
  });

};