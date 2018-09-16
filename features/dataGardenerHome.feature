Feature: Data Gardener home page

    @homepage
    Scenario: Search for a company
        Given I am on DataGardener Website
        Then I should be able to see home page with "IN DEPTH ANALYTICS OF COMPANIES AND DIRECTORS"
        When I search for a company "tagma"
        Then I should be able to see results
        Then I should be able to see header navigations
        When I select county drop down arrow
        And  I type County  "Hampshire"
        Then I should be able to see the results
        

           
        
