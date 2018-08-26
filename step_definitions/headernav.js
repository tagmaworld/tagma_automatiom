const { client, expect } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
// const sleep = require('thread-sleep');


Then('I can see home page with dataTable:', function (dataTable) {
   
    client.getText("#facts > div > div.row.counters", function(result) {
        expect(result.value).to.equal("Facts");
        console.log(result);
       });
});



