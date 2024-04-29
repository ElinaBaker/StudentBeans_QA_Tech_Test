const { Given } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

When('I open the search bar', async  () => {
    await simpleSearchPageObject.openSearchBar()
})

When('I enter "samsung"', async  (searchWord) => {
    await simpleSearchPageObject.enterSearchTerm(searchWord)
})

Then('I should select the {int}th {string} search listing', async  (listingIndex, searchWord) => {
    await simpleSearchPageObject.selectSearchListing(listingIndex, searchWord)
})
