package com.web.automation.stepDefinition;

import com.web.automation.base.DriverInstance;
import com.web.automation.utility.ConfigReader;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	@Given("^User is on login page$")
	public void user_is_on_login_page() throws Throwable {
    System.out.println(ConfigReader.readProjectConfiguration("ApplicationUrl"));
    DriverInstance.setDriverInstance();
	}

	@When("^User enter username$")
	public void user_enter_username() throws Throwable {
		 System.out.println(ConfigReader.readLocators("register_button"));
		 DriverInstance.getDriverInstance().quit();
	}

	@When("^User enter password$")
	public void user_enter_password() throws Throwable {

	}

	@Then("^User should be logged in$")
	public void user_should_be_logged_in() throws Throwable {

	}

	@When("^User click on logout button$")
	public void user_click_on_logout_button() throws Throwable {

	}

	@Then("^User should be logged out in$")
	public void user_should_be_logged_out_in() throws Throwable {

	}

}
