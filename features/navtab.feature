Feature:datagardner home page
    @facts
    Scenario: Verify the Header navigation exist
        Given when I am in DataGardener Website
        Then I should be able to see header navigation
        And I can see "facts" and "Companies near me" is visible