import{test, expect} from "@playwright/test"        // Should always be mentioned at the beginning of a Test Case.

/* Syntax:

test("title", ()=>
{
    step- 1
    step- 2
    step- 3
    .
    .
    .
})

*/

// Fixture- Global Variables like- browser, page

test ("Verify the title of the page.", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    let title: string = await page.title();
    console.log("Title of the page is: ", title);
    await expect(page).toHaveTitle ("Automation Testing Practice: PlaywrightPractice");
})

test ("Verify the URL of the page.", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    let URL: string = await page.url();
    console.log("URL is: ", URL);
    await expect(page).toHaveURL(/testautomationpractice.blogspot.com/);
})
