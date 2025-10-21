Feature: Login functionality
  As a user
  I want to login to the application
  So that I can access the system

  Background:
    Given I navigate to the login page

  Scenario: Successful login with valid credentials
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the products page
    And I should see the products title

  Scenario: Failed login with invalid credentials
    When I login with username "invalid_user" and password "wrong_password"
    Then I should see an error message
    And I should remain on the login page

  Scenario: Failed login with locked user
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see an error message containing "locked out"

  Scenario Outline: Login with multiple invalid credentials
    When I login with username "<username>" and password "<password>"
    Then I should see an error message
    And I should remain on the login page

    Examples:
      | username        | password      |
      | invalid_user    | secret_sauce  |
      | standard_user   | wrong_pass    |
      | empty_user      |               |
      |                 | secret_sauce  |