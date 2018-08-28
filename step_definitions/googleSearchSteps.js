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
    console.log('HP executed');
    return client.waitForElementVisible('.company_search', 20000)
        .setValue('.company_search', companyName).click('.btn-get-started');
});

Then('I should be able to see results', async function () {
    await sleep(5000);
    return client.expect.element('#table-test').to.be.visible;
});
Then('I should be able to see home from top navi', async function () {
    await sleep(5000);
    return client.expect.element('#table-test').to.be.visible;
});

When('Customer click on the facts header navigator', async function () {
    await sleep(5000);
    return client.waitForElementVisible("#navb > ul > li:nth-child(3) > a", 20000).click('#navb > ul > li:nth-child(3) > a');


});

Then('Customer should be able to see all the facts columns about the website', async function () {
    await sleep(5000);
    client.getText("#navb > ul > li:nth-child(3) > a", function (result) {
        console.log(result.value);
    });
    return client.expect.element('#facts > div > div.row.counters').to.be.visible;
});



When('Customer click on the services header navigator', async function () {
    await sleep(5000);
    return client.waitForElementVisible("#navb > ul > li:nth-child(4) > a", 20000).click('#navb > ul > li:nth-child(4) > a');

});

Then('Customer should be able to see all the services columns about the website', async function () {
    await sleep(5000);
    client.getText("#navb > ul > li:nth-child(4) > a", function (result) {
        console.log(result.value);
    });
    return client.expect.element('#services > div > div.row').to.be.visible;
});