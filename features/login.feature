Feature:Login

Scenario: Customer fill all the field with valid values
Given I am on DataGardener Website
When I click the login 
Then I should be presented with login page
When I input valid email id "bhavyasrireddy@gmail.com"
And I input valid Password "Password12"
Then I should be able to see dashboard
