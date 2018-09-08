Feature:datagardner home page
    @header
    Scenario: identifying header navigation exists and print the value
        Given I am on DataGardener Website
        Then I should be able to see header navigations
        Then  I can see home page with details:
            | data              |
            | HOME              |
            | PRODUCT           |
            | FACTS             |
            | SERVICES          |
            | CASE STUDY        |
            | PRICING           |
            | CONTACT           |
            | COMPANIES NEAR ME |




