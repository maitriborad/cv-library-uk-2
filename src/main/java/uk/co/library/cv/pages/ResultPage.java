package uk.co.library.cv.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import uk.co.library.cv.utility.Utility;

public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[@class='search-header__title']")
    WebElement resultMessage;

    public void verifyTheResults(String expected){
        Assert.assertEquals(resultMessage.getText(),expected, "Message is not matching");
        log.info(" Verify result text" +resultMessage.toString());
    }
}
