const { client, expect } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const sleep = require('thread-sleep');


Given('I am on DataGardener Website', function () {
    return client.url(client.launch_url).waitForElementVisible('body', 20000)
    .waitForElementVisible("body > cookie-law > cookie-law-el > div > div > a > svg", 20000)
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

When('I click the login', async function () {
    await sleep(5000);
    return client.waitForElementVisible("#navb > form > a", 20000).click('#navb > form > a');

});
Then('I should be presented with login page', async function () {

    await sleep(5000);
    return client.url(client.login_url).waitForElementVisible('body', 20000);
});

When('I input valid email id {string}', function (emailid) {

    return client.waitForElementVisible("#name", 20000).setValue('#name', emailid);
});

When('I input valid Password {string}', function (Password) {

    return client.waitForElementVisible("body > ng-component > ng-component > div > div > div > div > div > div > div > form > div > div.col-md-7.col-lg-7.col-sm-12.mt-5.mb-5.order-md-1.order-2 > div:nth-child(2) > div > div.input-group > input", 20000).setValue('body > ng-component > ng-component > div > div > div > div > div > div > div > form > div > div.col-md-7.col-lg-7.col-sm-12.mt-5.mb-5.order-md-1.order-2 > div:nth-child(2) > div > div.input-group > input', Password)
        .click('body > ng-component > ng-component > div > div > div > div > div > div > div > form > div > div.col-md-7.col-lg-7.col-sm-12.mt-5.mb-5.order-md-1.order-2 > div.form-actions.mt-2.mb-2 > button:nth-child(1)');
});

Then('I should be able to see dashboard', async function () {
    await sleep(20000);
    return client.url(client.dashboard_url).waitForElementVisible('body', 20000);
});

When('I select county drop down arrow', async function () {
    await sleep(20000);
    return client.waitForElementVisible("#collapseExample > div > div:nth-child(10) > div:nth-child(1) > a.btn.zero-btn-radius.custom-btn-size.pull-right > i", 20000)
        .click('#collapseExample > div > div:nth-child(10) > div:nth-child(1) > a.btn.zero-btn-radius.custom-btn-size.pull-right > i');
});

When('I type County  {string}', function (County) {

    return client.waitForElementVisible("#county", 20000)
        .setValue('#county', County)
        .click('#select-county > div > typeahead-container > button');
});
Then('I should be able to see the results', async function () {
    await sleep(20000);
    return client.expect.element('#table > tbody > tr > td:nth-child(2) > a.ml-3.display-table').to.be.visible;
});