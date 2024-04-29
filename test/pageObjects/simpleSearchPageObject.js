const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async openSearchBar() {
    const searchBarButton = await $('[class="!w-full !py-3 xl:!p-0 css-tgua54"]')
     await searchBarButton.click();
  }

  async enterSearchWord(searchWord) {
    const searchInputField = await $('[class="!w-full !py-3 xl:!p-0 css-tgua54"]');
      await searchInputField.setValue(samsung);

  }

   async selectSearchListing(listingIndex, searchWord) {
      const searchListings = await $$('[class="flex items-start rounded-1 p-3 hover:bg-grey-50"]');
        let samsungCount = 0;
        let fourthSamsungListing;

        for (const listing of searchListings) {
            const listingText = await listing.getText();
            if (listingText.includes('samsung')) {
                samsungCount++;
                if (samsungCount === 4) {
                    fourthSamsungListing = listing;
                    break;
                }
            }
        }

        if (fourthSamsungListing) {
            await fourthSamsungListing.click();
        } else {
            throw new Error('The 4th "Samsung" search listing was not found.');
      }

   }

}


module.exports = SimpleSearchPageObject
