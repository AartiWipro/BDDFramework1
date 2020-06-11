Feature: Registered login activity

Scenario: Register user
Given  User is on login page
When   User enter username 
And    User enter password
Then   User should be logged in
When   User click on logout button 
Then   User should be logged out in
