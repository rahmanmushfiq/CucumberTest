package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SmokeTest {

    private static WebDriver driver;

    @Given("^Setup \"([^\"]*)\" browser$")
    public void setup_browser(String browser) {
        if (browser.equalsIgnoreCase("Chrome")) {
            String projectPath = System.getProperty("user.dir");
            String chromeDriverPath = projectPath + "/drivers/chromedriver";
            System.setProperty("webdriver.chrome.driver", chromeDriverPath);

            ChromeOptions options = new ChromeOptions();
            options.addArguments("--headless");
            driver = new ChromeDriver(options);
        } else if (browser.equalsIgnoreCase("Firefox")) {
            String projectPath = System.getProperty("user.dir");
            String geckoDriverPath = projectPath + "/drivers/geckodriver";
            System.setProperty("webdriver.gecko.driver", geckoDriverPath);

            driver = new FirefoxDriver();
        } else {
            System.out.println("Driver not found....!\n");
            System.out.println(new Exception().getMessage());
        }
    }

    @Given("^Open and start application$")
    public void open_and_start_application() {
        driver.get("https://www.facebook.com");
    }

    @When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_valid_and(String uname, String pass) {
        driver.findElement(By.id("email")).sendKeys(uname);
        driver.findElement(By.id("pass")).sendKeys(pass);
        driver.findElement(By.id("loginbutton")).click();
    }

    @Then("^User should be able to login successfully$")
    public void user_should_be_able_to_login_successfully() {
        String actualWrongCredentialMessage = driver.findElement(By.id("error_box")).getText();
        System.out.println(actualWrongCredentialMessage);
    }

    @Then("^The browser should be closed$")
    public void the_browser_should_be_closed() {
        if (driver.toString().contains("Chrome")) {
            System.out.println("Chrome is closing.........");
            driver.quit();
        } else if (driver.toString().contains("Firefox")) {
            System.out.println("Firefox is closing........");
            driver.quit();
        } else {
            System.out.println("Invalid driver..");
        }
    }
}
