import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homePage from '../../pages/abnHomepage'
import lookupPage from '../../pages/abnLookuppage'
import detailPage from '../../pages/abnDetailspage'
import abnInvalidpage from '../../pages/abnInvalidpage'

Given('I open ABN Lookup website', () => {
    homePage.abnHomepage()   
})

When('I search for {string} ABN', (abn) => {
    homePage.searchABN(abn)
});

Then('I click on {string} link to get details', (abn) => {
    lookupPage.findABN(abn)
})

And('I validate business details for {string} ABN', (abn) => {
    detailPage.validateEntitydetails(abn)
})

When('I search for Invalid ABN', () => {
    homePage.searchABN()
})

Then('I goto invalid abn page', () => {
    abnInvalidpage.checkPage()
})

And('I should see error message for invalid ABN {string}', (abn) => {
    abnInvalidpage.validateErrors(abn)
})

And('I download the pdf report for {string} ABN', (abn) => {
    detailPage.downloadPdf(abn)
})