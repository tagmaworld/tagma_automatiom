
Feature: Facts and Services header navigation
    @facts
    Scenario: Customer click on facts header
        Given I am on DataGardener Website
        When Customer click on the facts header navigator
        Then Customer should be able to see all the facts columns about the website
    @services
    Scenario: Customer click on services header
        Given I am on DataGardener Website
        When Customer click on the services header navigator
        Then Customer should be able to see all the services columns about the website