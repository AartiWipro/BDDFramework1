$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Registered login activity",
  "description": "",
  "id": "registered-login-activity",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Register user",
  "description": "",
  "id": "registered-login-activity;register-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be logged out in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 4813688225,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_username()"
});
formatter.result({
  "duration": 161183115,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_password()"
});
formatter.result({
  "duration": 32434,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_logged_in()"
});
formatter.result({
  "duration": 39113,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_logout_button()"
});
formatter.result({
  "duration": 86524,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_logged_out_in()"
});
formatter.result({
  "duration": 27727,
  "status": "passed"
});
});