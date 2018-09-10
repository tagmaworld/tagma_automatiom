Feature: postcode
@signup

Scenario: filter by postcode option 
Given I am on DataGardener Website
When I search for company name "tagma ltd"
Then I click search 
Then I should be able to see results
Then  I select postcode drop down arrow
And  I type postcode  "SO152BG"
Then I select Search for PostCode only option
Then I should be able to see results