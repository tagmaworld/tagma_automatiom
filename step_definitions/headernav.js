const { client, expect } = require('nightwatch-cucumber');
const { Given, Then } = require('cucumber');
// const sleep = require('thread-sleep')

// Given('I am on DataGardener Website', function () {
//     return client.url(client.launch_url).waitForElementVisible('body', 20000);
// });

Then('I can see home page with dataTable:', function (dataTable) {
    return client.getText("#navb > ul > li:nth-child(1) > a", function (result) {
        console.log(result.value);

        client.getText("#navb > ul > li:nth-child(2) > a", function (result) {
            console.log(result.value);

            client.getText("#navb > ul > li:nth-child(3) > a", function (result) {
                console.log(result.value);
                client.getText("#navb > ul > li:nth-child(4) > a", function (result) {
                    console.log(result.value);
                    client.getText("#navb > ul > li:nth-child(5) > a", function (result) {
                        console.log(result.value);
                        client.getText("#navb > ul > li:nth-child(6) > a", function (result) {
                            console.log(result.value);
                            client.getText("#navb > ul > li:nth-child(7) > a", function (result) {
                                console.log(result.value);
                                client.getText("#navb > ul > li:nth-child(8) > a", function (result) {
                                    console.log(result.value);
                                    client.getText(".btnLogin", function (result) {
                                        console.log(result.value);

                                    });

                                });


                            });

                        });
                    });

                });


            });

        });

    });

});

















































