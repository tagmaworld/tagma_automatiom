Feature:Registration
@registration
Scenario: Customer fill all the field with valid values
Given I am on DataGardener Website
When I click on the pricing option
Then I should be presented with subcription options
When I click on trial plan signup button
Then I should be presented with registation page
And I enter registration details
|name| email|
|Bhavya| bhavya@tagma.co.uk|
