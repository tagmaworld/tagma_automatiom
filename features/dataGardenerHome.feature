Feature: Data Gardener home page

    @homepage
    Scenario: Search for a company
        Given I am on DataGardener Website
        Then I should be able to see home page with "IN DEPTH ANALYTICS OF COMPANIES AND DIRECTORS"
        When I search for a company "Vista"
        Then I should be able to see results
        When I select county drop down arrow
        And  I type County  "Hampshire"
        Then I should be able to see the results
        # And I should be able to see number of search results
        # When I click on update profile 

        

           
        
