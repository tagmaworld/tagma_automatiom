var homePageCommands = {
    searchComapnyData: function(companyName){
        return this.waitForElementVisible('@searchInputField', 20000)
        .setValue('@searchInputField', companyName)
    },
    clickSearchButton: function(){
        this.click('@searchButton')
    },
    verifySearchResultAppearing: function(){
        this.api.pause(5000)
        return this.expect.element('@resultTable').to.be.visible;
    },
    enterRegistrationDetails: function(){
        this.api.pause(5000)
        return this.waitForElementVisible("#name", 20000)
       .setValue("#name", name)
       .pause(2000)
       .waitForElementVisible("#email", 20000)
       .setValue("#email", email)   
    }

}

module.exports = {
    url: function () {
        return this.api.launchUrl
    },
    commands: [homePageCommands],
    elements:{
        homePageSubTitle:{
            selector: '.text-uppercase > strong:nth-child(1)'
        },
        searchInputField:{
            selector: '.company_search'
        },
        searchButton:{
            selector: '.btn-get-started'
        },
        wholePageBody:{
            selector: 'body'
        },
        signUpLink1:{
            selector: '.col-sm-12.col-md-12.text-center'
        },
        resultTable:{
            selector: '#table-test'
        },
        name:{
            selector: '#name'
        },
        email:{
            selector: '#email'
        }
        


    }
}