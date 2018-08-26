Feature:datagardner home page
    @header
    Scenario: identifying header navigation
        Given  In DataGardener Website
        Then  I can see home page with dataTable:
            | HOME              |
            | PRODUCT           |
            | FACTS             |
            | SERVICES          |
            | CASE STUDY        |
            | PRICING           |
            | CONTACT           |
            | COMPANIES NEAR ME |
            | LOGIN             |


