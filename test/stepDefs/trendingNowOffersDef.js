const { Given, When, Then } = require('cucumber');
const TrendingNowOffersObject = require('./TrendingNowOffersObject');

Given('I am on the Student Beans website', async => () {
    await TrendingNowOffersObject.openStudentBeansWebsite();
});

When('I navigate to the Trending Now offers', async => () {
    await TrendingNowOffersObject.navigateToTrendingNowOffers();
});

Then('I open the {int}th discount within the Trending Now offers list', async => () {
    await TrendingNowOffersObject.openSixthDiscount();
});