Feature: Repos

  Scenario: Results
    Given The API returns some results
    When I visit the home page
    Then I see the results rendered on the page

  Scenario: No results
    Given The API returns no results
    When I visit the home page
    Then I see the empty message
