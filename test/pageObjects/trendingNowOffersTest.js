const { Builder, By, until } = require('selenium-webdriver');

class TrendingNowOffersObject {
    static async openStudentBeansWebsite() {
        this.driver = await new Builder().forBrowser('chrome').build();
             await this.driver.get('https://www.studentbeans.com/uk');
    }

    const buttonLocator = By.css('[data-testid="nav-category-trending-now"]');
               await driver.wait(until.elementLocated(buttonLocator), 5000);

    async verifyTrendingPage () {
          await this.isElementEqualToExpected($('h1=The latest and best student discounts'), 'The latest and best student discounts')
        }

         const buttonElement = await driver.findElement(buttonLocator);
               await buttonElement.click();
               await driver.sleep(2000);

         async selectItemFromList(item){
              const element = await $(`div.css-1b0petf:nth-child(${item})`)
              element.click()

        } finally {
                await driver.quit();
            }

}

module.exports = TrendingNowOffersObject;
