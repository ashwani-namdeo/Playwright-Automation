/*

Locators- Used to identify the elements in a Web Page.
DOM- Document Objet Model- It is an API Interface provided by the browser. 

Recommended Built-in Locators from Playwright:

1. page.getByAltText() to locate an element, usually image, by its text alternative
    - Use this locator when your element supports alt text images such as img & area elements.
2. page.getByText() to locate by text content.
    - Use this to find an element by the text it contains. For non-interactice elements.
3. page.getByRole() to locate by explicit and implicit accessibility attributes.
    - Use this to find the interractive elements like buttons, links, check-boxes, radio buttons, dropdowns, etc.
4. page.getByLabel() to locate a form control by associated label's text.
    - Use this to fill forms like text boxes with labels in front of them.
5. page.getByPlaceholder() to locate an input by placeholder.
    - Best used for inputs without a label but having a placeholder
6. page.getByTitle() to locate an element by its title attribute.
    - Used when your element has a meaningful title attribute.
7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    - Used when the text or role based locators are unstable or not suitable.

*/



import {test, expect, Locator} from "@playwright/test"

test ("Verify Playwright Locators", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

/*
1. page.getByAltText() to locate an element, usually image, by its text alternative
    - Use this locator when your element supports alt text images such as img & area elements.
*/

    const logo:Locator = page.getByAltText("Automation Testing Practice");         // await is not relevant here.
    expect(logo).toBeVisible;
    
/*
2. page.getByText() to locate by text content.
    - Use this to find an element by the text it contains. For non-interactice elements.
*/

    //  const text:Locator = page.getByText("Automation Testing Practice");
    //  await expect(text).toBeVisible();

// OR

    expect(page.getByText("Automation Testing Practice")).toBeVisible;

/*
3. page.getByRole() to locate by explicit and implicit accessibility attributes.
    - Use this to find the interractive elements like buttons, links, check-boxes, radio buttons, dropdowns, etc.
*/

    page.getByRole("link", { name: 'PlaywrightPractice' }).click();
    // expect (page.getByText("PlaywrightPractice")).toBeVisible;

// OR

    expect (page.getByRole('heading', { name: 'PlaywrightPractice'})).toBeVisible;

/*
4. page.getByLabel() to locate a form control by associated label's text.
    - Use this to fill forms like text boxes with labels in front of them.
*/

    await page.getByLabel('Email Address:').fill('abcd@gmail.com');
    await page.getByLabel('Password:').fill('test@1234');
    await page.getByLabel('Your Age:').fill('35');

/*
5. page.getByPlaceholder() to locate an input by placeholder.
    - Best used for inputs without a label but having a placeholder
*/

    await page.getByPlaceholder('Enter your full name').fill('Test Data');
    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('9876543210');
    await page.getByPlaceholder('Type your message here...').fill('Hi there I am Practicing Playwright Locators at the moment. Thank you.!!');
    await page.getByPlaceholder('Search products...').fill('Galaxy S23 Ultra');

/*
6. page.getByTitle() to locate an element by its title attribute.
    - Used when your element has a meaningful title attribute.
*/
    
    await expect(page.getByTitle('Home page link')).toHaveText('Home');
    await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');

/*
7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    - Used when the text or role based locators are unstable or not suitable.
*/

    await expect(page.getByTestId('edit-profile-btn')).toHaveText('Edit Profile');
    await expect(page.getByTestId('profile-name')).toHaveText('John Doe');
    await expect(page.getByTestId('profile-email')).toHaveText('john.doe@example.com');


})