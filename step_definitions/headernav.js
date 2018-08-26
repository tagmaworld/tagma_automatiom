const { client, expect } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
// const sleep = require('thread-sleep');

Given('In DataGardener Website', function () {
    return client.url(client.launch_url).waitForElementVisible('body', 20000);
});

Then('I can see home page with dataTable:', function (dataTable) {
    console.log(dataTable);
});



