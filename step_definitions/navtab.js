const { client, expect } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
// const sleep = require('thread-sleep');



Then('I should be able to see header navigation', function () {
   return client.expect.element('.navbar-nav').to.be.visible;
   
});


Then('I can see {string} and {string} is visible', function (string, string2) {
    return client.expect.element('li.nav-item:nth-child(3) > a:nth-child(1),li.nav-item:nth-child(8) > a:nth-child(1)').to.be.visible;
});
