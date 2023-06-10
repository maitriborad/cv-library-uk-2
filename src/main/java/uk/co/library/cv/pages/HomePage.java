package uk.co.library.cv.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.cv.utility.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//span[text()='Accept All']")
    WebElement acceptCookie;

    @CacheLookup
    @FindBy(id = "keywords")
    WebElement jobTitleField;

    @CacheLookup
    @FindBy(id = "location")
    WebElement locationField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMinField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMaxField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@class='hp-jobtype form__select']")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;
    @CacheLookup
    @FindBy(xpath = "//iframe[@id='gdpr-consent-notice']")
    WebElement frame;

    public void acceptAllCookies() throws InterruptedException {
        Thread.sleep(500);
        driver.switchTo().frame(4);
        mouseHoverToElementAndClick(acceptCookie);
    }

    public void enterJobTitle(String jobTitle){
        sendTextToElement(jobTitleField,jobTitle);
        log.info("Enter Job title" + jobTitle + jobTitleField.toString());
    }
    public void enterLocation(String location){
        sendTextToElement(locationField,location);
        log.info("Location " + location + locationField.toString());
    }
    public void selectDistance(String distance){
        selectByVisibleTextFromDropDown(distanceDropDown,distance);
        log.info("Select from Drop down menu" + distance + distanceDropDown.toString());
    }
    public  void clickOnMoreSearchOptionLink(){
        clickOnElement(moreSearchOptionsLink);
        log.info("Click on " + moreSearchOptionsLink.toString());
    }
    public void enterMinSalary(String minSalary){
        sendTextToElement(salaryMinField,minSalary);
        log.info("Minimum salary " + minSalary + salaryMinField.toString());
    }
    public void enterMaxSalary(String maxSalary){
        sendTextToElement(salaryMaxField,maxSalary);
        log.info(" Maximum Salary select " + maxSalary + salaryMaxField.toString());
    }
    public void selectSalaryType(String salaryType){
        selectByVisibleTextFromDropDown(salaryTypeDropDown,salaryType);
        log.info(" Select text " + salaryType + salaryTypeDropDown.toString());
    }
    public void selectJobType(String jobType){
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
        log.info(" Select " + jobType + jobTypeDropDown.toString());
    }
    public void clickOnFindJobsButton(){
        clickOnElement(findJobsBtn);
        log.info(" Find the job " +findJobsBtn.toString());
    }
}
