Feature: Test Facebook smoke scenario

  Scenario Outline: Test login with valid credential

    Given Setup "chrome" browser

    And Open and start application

    When I enter valid "<username>" and "<password>"

    Then User should be able to login successfully

    Then The browser should be closed
    Examples:
      | username         | password         |
      | selenium@abc.com | selenium@abc.com |
      | cucumber@abc.com | cucumber@abc.com |
      | junit@abc.com    | junit@abc.com    |