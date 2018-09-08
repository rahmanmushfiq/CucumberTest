$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login with valid credential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Setup \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open and start application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The browser should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;1"
    },
    {
      "cells": [
        "selenium@abc.com",
        "selenium@abc.com"
      ],
      "line": 16,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;2"
    },
    {
      "cells": [
        "cucumber@abc.com",
        "cucumber@abc.com"
      ],
      "line": 17,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;3"
    },
    {
      "cells": [
        "junit@abc.com",
        "junit@abc.com"
      ],
      "line": 18,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Test login with valid credential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Setup \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open and start application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid \"selenium@abc.com\" and \"selenium@abc.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 7
    }
  ],
  "location": "SmokeTest.setup_browser(String)"
});
formatter.result({
  "duration": 5772833369,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.open_and_start_application()"
});
formatter.result({
  "duration": 4495531128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium@abc.com",
      "offset": 15
    },
    {
      "val": "selenium@abc.com",
      "offset": 38
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 1643948518,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 49259558,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.the_browser_should_be_closed()"
});
formatter.result({
  "duration": 154919073,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test login with valid credential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Setup \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open and start application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid \"cucumber@abc.com\" and \"cucumber@abc.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 7
    }
  ],
  "location": "SmokeTest.setup_browser(String)"
});
formatter.result({
  "duration": 624027485,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.open_and_start_application()"
});
formatter.result({
  "duration": 5099270471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber@abc.com",
      "offset": 15
    },
    {
      "val": "cucumber@abc.com",
      "offset": 38
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 1650357255,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 57296607,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.the_browser_should_be_closed()"
});
formatter.result({
  "duration": 65044305,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test login with valid credential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Setup \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open and start application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid \"junit@abc.com\" and \"junit@abc.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 7
    }
  ],
  "location": "SmokeTest.setup_browser(String)"
});
formatter.result({
  "duration": 251653793,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.open_and_start_application()"
});
formatter.result({
  "duration": 4157830610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "junit@abc.com",
      "offset": 15
    },
    {
      "val": "junit@abc.com",
      "offset": 35
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 1483497975,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 51196827,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.the_browser_should_be_closed()"
});
formatter.result({
  "duration": 74497657,
  "status": "passed"
});
});