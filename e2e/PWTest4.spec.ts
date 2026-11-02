import {test, expect, Locator} from "@playwright/test"

test ("Dynamic Buttons", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // for loop to click the button 10 times.
    for (let i=1 ; i<=10 ; i++)
        {
        let button: Locator = page.locator('//button[text()="STOP" or text()="START"');
        // let button: Locator = page.locator("//button[@name='start']");
        // let button: Locator = page.locator("//button[@name='start' or @name='stop']");
        // let button: Locator = page.locator("//button[contains(@name, 'st')]");
        // let button: Locator = page.locator("//button[starts-with](@name, 'st')");
        button.click;
        await page.waitForTimeout(2000);        // Waiting for 2 seconds.
        }



})