Feature: Data Gardener home page

    @homepage
    Scenario: Search for a company
        Given I am on DataGardener Website
        Then I should be able to see home page with "IN DEPTH ANALYTICS OF COMPANIES AND DIRECTORS"
        When I search for a company "tagma world"
        Then I should be able to see results
<<<<<<< HEAD
        When I select county drop down arrow
        And  I type County  "Hampshire"
        Then I should be able to see the results
=======
        And I want to filter record by county
        When I type county "Hampshire"

>>>>>>> d5113d8eb77ef2762af2d9b188752604f872bccc
