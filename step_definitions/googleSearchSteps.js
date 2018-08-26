const { client, expect } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const sleep = require('thread-sleep');


Given('I am on DataGardener Website', function () {
    return client.url(client.launch_url).waitForElementVisible('body', 20000);
});

Then('I should be able to see home page with {string}', function (message) {
    return client.expect.element('.text-uppercase > strong:nth-child(1)').text.to.contain(message);
  });

When('I search for a company {string}', function (companyName) {
      return client.waitForElementVisible('.company_search', 20000)
      .setValue('.company_search', companyName).click('.btn-get-started');
});

Then('I should be able to see result',async function () {
    await sleep(5000);
    return client.expect.element('#table-test').to.be.visible;
});
Then('I should be able to see home from top navi',async function () {
    await sleep(5000);
    return client.expect.element('#table-test').to.be.visible;
});
