const { client, expect } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const sleep = require('thread-sleep');


Given('I am on DataGardener Website', function () {
    return client.url(client.launch_url).waitForElementVisible('body', 20000)
    .resizeWindow(1200 , 1000)
    .waitForElementVisible("body > cookie-law > cookie-law-el > div > div > a > svg", 2000)
    .click("body > cookie-law > cookie-law-el > div > div > a > svg");
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
    console.log('facts executed');
    return client.expect.element('#facts > div > div.row.counters').to.be.visible;
});



When('Customer click on the services header navigator', async function () {
    await sleep(5000);
    console.log('services executed');
    return client.waitForElementVisible("#navb > ul > li:nth-child(4) > a", 20000).click('#navb > ul > li:nth-child(4) > a');

});

Then('Customer should be able to see all the services columns about the website', async function () {
    await sleep(5000);
    return client.expect.element('#services > div > div.row').to.be.visible;
});

When('I want to filter record by county', async function () {
    await sleep(5000);
    return client.waitForElementVisible("div.list-group-item:nth-child(10) > div:nth-child(1) > a:nth-child(1) > strong", 20000).click("div.list-group-item:nth-child(10) > div:nth-child(1) > a:nth-child(1) > strong");

})
When('I type county {string}', async function (county) {
    await sleep(5000);
    return client.waitForElementVisible("#county", 20000)
    .setValue("#county", county)
    .pause(2000)
    .waitForElementVisible(".dropdown-item.active", 20000)
        .click(".dropdown-item.active")
        .pause(2000)
        .expect.element("#table > tbody > tr > td:nth-child(2) > a.ml-3.display-table").to.be.visible;
        


})