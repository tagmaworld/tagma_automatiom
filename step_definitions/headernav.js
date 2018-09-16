const { client, expect, assert } = require('nightwatch-cucumber');
const { Given, Then } = require('cucumber');
const sleep = require('thread-sleep');


Then('I can see home page with details:', async function (dataTable) {
    data = dataTable.rows();
    for(var i=1; i<=8;i++) {
        var text =    await client.waitForElementVisible('#navb > ul > li:nth-child(' + i+ ') > a', 20000)
        .getText('#navb > ul > li:nth-child(' + i+ ') > a', function(result){
           if(result.value == data[i-1]){
            console.log('match found')
           }
        });
       }
    
   
  
});

Then("I should be able to see header navigations",async function(){
    await sleep(5000);
   return client.elements( "css selector","#table > tbody > tr",function(result){
       console.log("The total number of companies are  -----> " + result.value.length );
        for(var i=1; i<= result.value.length; i++){
           client.expect.element('#table > tbody > tr:nth-child(' + i +')').to.be.visible;
        }
    })

});

















































