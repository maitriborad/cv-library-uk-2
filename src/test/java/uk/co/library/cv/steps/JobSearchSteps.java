package uk.co.library.cv.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.cv.pages.HomePage;
import uk.co.library.cv.pages.ResultPage;

public class JobSearchSteps {
    @Given("^I am homepage$")
    public void iAmHomepage() throws InterruptedException {
        new HomePage().acceptAllCookies();
    }

    @When("^I enter role in \"([^\"]*)\"$")
    public void iEnterRoleIn(String jobTitle) {
      new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enter job \"([^\"]*)\"$")
    public void iEnterJob(String location) {
        new HomePage().enterLocation(location);
    }

    @And("^I select \"([^\"]*)\"$")
    public void iSelect(String distance) {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on more search options$")
    public void iClickOnMoreSearchOptions() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter minimum salary \"([^\"]*)\"$")
    public void iEnterMinimumSalary(String minSalary) {
        new HomePage().enterMinSalary(minSalary);
    }

    @And("^I enter maximum salary \"([^\"]*)\"$")
    public void iEnterMaximumSalary(String maxSalary) {
        new HomePage().enterMaxSalary(maxSalary);
    }

    @And("^I select salary \"([^\"]*)\"$")
    public void iSelectSalary(String type) {
        new HomePage().selectSalaryType(type);
    }

    @And("^I select job \"([^\"]*)\"$")
    public void iSelectJob(String type) {
        new HomePage().selectJobType(type);
    }

    @And("^I click on find jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^Verify that \"([^\"]*)\" is displayed$")
    public void verifyThatIsDisplayed(String message) {
        new ResultPage().verifyTheResults(message);
    }
}
