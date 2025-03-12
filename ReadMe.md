###### Install npm modules ######
npm install

###### To run tests ######
npm run test

###### To debug tests ######
npx cypress open

This will open cypress run window with specs listed, tap on test to start execution. During execution please use browser console to debug a test.

###### To run cucumber feature files ######
npx cypress run --spec **/*.feature

###### Test scenarios covered ######
Scenario 1: Search for valid entity and verify details
• Navigate to https://abr.business.gov.au/.
• Enter <ABN name or number> in the search field and click search.
• Click on the correct ABN link from search result.
• Assert the ABN details are valid as per input json.

Scenario 2: Search for invalid entity and verify details
• Navigate to https://abr.business.gov.au/.
• Enter invalid <ABN number> in the search field and click search.
• Assert error details in the page content.
• Assert the links for advanced search, format specification and FAQs as per <ABN number>

Optional Scenarios: 
• Search for valid entity and verify details is generalized which can be used to search any valid <ABN name or number> with minimum required values for any ABN entity json which is the test input file.
• Enhanced reporting using mocha. 
