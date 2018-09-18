const { client, expect } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const sleep = require('thread-sleep');
var coockiePopUp = "body > cookie-law > cookie-law-el > div > div > a > svg";
let popupclose;


Given('I am on DataGardener Website', function () {
    const homePage = client.page.homePage();
    homePage.navigate().waitForElementVisible('@wholePageBody', 20000);
    // return client.url(client.launch_url).waitForElementVisible('body', 20000)
    //     .waitForElementVisible("body > cookie-law > cookie-law-el > div > div > a > svg", 20000)
    //     .click("body > cookie-law > cookie-law-el > div > div > a > svg");
});

Then('I should be able to see home page with {string}', function (message) {
    const homePage = client.page.homePage();
    return homePage.expect.element('@homePageSubTitle').text.to.contain(message);
});

When('I search for a company {string}', function (companyName) {
    const homePage = client.page.homePage();
    homePage.searchComapnyData(companyName);
    homePage.clickSearchButton();
});

Then('I should be able to see results', async function (dataTable) {
    await sleep(5000);
    data = dataTable.rows()
    return client.elements( "css selector","#table > tbody > tr",function(result){
         for(var i=1; i<= result.value.length; i++){
             client.getText()
         }
     })
    
    console.log(data[0]);
    const homePage = client.page.homePage();
    homePage.verifySearchResultAppearing();
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
When('I click on the pricing option', async function () {

    await sleep(5000);
    return client.waitForElementVisible("#navb > ul > li:nth-child(6) > a", 20000)
        .click('#navb > ul > li:nth-child(6) > a');
});
Then('I should be presented with subcription options', async function () {

    await sleep(5000);
    return client.waitForElementVisible("#navb > ul > li:nth-child(6) > a", 20000);
});
When('I click on trial plan signup button', async function () {
//     const homePage = client.page.homePage();
//     homePage.waitForElementVisible({selector:'@signUpLink1', index:1}, 2000).click('@signUpLink1');
//    await sleep(20000);
    return client.waitForElementVisible("#call-to-action > div > div.pricing-table-container > carousel > div > div > slide.active.item.carousel-item > div > div:nth-child(1) > div > div.card-body.bg-white > div > div.col-sm-12.col-md-12.text-center > a", 20000)
        .click('#call-to-action > div > div.pricing-table-container > carousel > div > div > slide.active.item.carousel-item > div > div:nth-child(1) > div > div.card-body.bg-white > div > div.col-sm-12.col-md-12.text-center > a');
});
Then('I should be presented with registation page', async function () {
    await sleep(20000);
    // return client.expect.element('form.ng-invalid > div:nth-child(1) > label:nth-child(1)').to.be.visible;
    return client.expect.element('#top_signUp > div > form > div > div > div > div > div > div > div.col-md-12.text-center > h4').to.be.visible;
});


Then('I enter registration details', async function (dataTable) {
    var name;
    var email;
    dataTable.rows().forEach(element => {
         name = element[0];
         email = element[1];
       });
       
  });


