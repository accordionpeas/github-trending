Feature: Filters

  Scenario: Filter by favourites
    Given The API returns some results
    When I visit the home page
    And I favourite a repo
    And I filter by favourites
    Then I only see the favourited repos

  Scenario: Filter by a language
    Given The API returns some results
    When I visit the home page
    And I filter by a language
    Then I only see the repo written in the language

  Scenario: Filter by multiple languages
    Given The API returns some results
    When I visit the home page
    And I filter by 2 languages
    Then I only see the repos written in the languages

  Scenario: Filter by favourites and languages
    Given The API returns some results
    When I visit the home page
    And I favourite a repo
    And I filter by favourites and a language
    Then I only see the favourited repos and the repo written in the language
