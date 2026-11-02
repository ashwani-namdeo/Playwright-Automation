import{test, expect, Locator} from "@playwright/test";

test ("XPath Demo in Playwright", async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

//1.  Absolute XPath > Logo

    const Absolute_logo:Locator = page.locator("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    expect (Absolute_logo).toBeVisible; 

//2.  Relative XPath > Logo

    const Relative_logo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    expect (Relative_logo).toBeVisible;

//3. Locating Elements using XPath- Contains Method- contains()

    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const products_count: number = await products.count();
    console.log("Computer Related Products: ", products_count);
    expect(products_count).toBeGreaterThan(0);

    // console.log (await products.textContent());     // Strict Mode Violation Error
    console.log("First Computer Related Product: ", await products.first().textContent());
    console.log("Last Computer Related Product: ", await products.last().textContent());

    console.log("Nth Computer Related product: ", await products.nth(3).textContent());         // Prints the last matching element's text.
    console.log("First Computer Related Product: ", await products.nth(0).textContent());
    console.log("Second Computer Related Product: ", await products.nth(1).textContent());
    console.log("Third Computer Related Product: ", await products.nth(2).textContent());
    console.log("Fourth Computer Related Product: ", await products.nth(3).textContent());

    let product_titles: string[] = await products.allTextContents();
    // console.log("All the Computer Related Product Titles: ", product_titles);
    for (let pt of product_titles)
    {
        console.log(pt);
    }
    

//4. Locating Elements using XPath- Start with Method > satrt-with()

    const building_products: Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
    const count: number = await building_products.count();
    expect (count).toBeGreaterThan(0);

//5. Locating Elements using XPath- Text Method > text()

    const Register_button_1 : Locator = page.locator("//a[text()='Register']");
    await expect (Register_button_1).toBeVisible();

    //OR

    const Register_button_2 : Locator = page.locator ("//a[.='Register']");
    await expect (Register_button_2).toBeVisible();

    //OR

    const Register_button_3 : Locator = page.locator ("//a[normalize-space()='Register']");
    await expect (Register_button_3).toBeVisible();

//6. Locating Elements using XPath- Last Function > last()

    const Last_Element_1 : Locator = page.locator('//div[@class="column follow-us"]//li[last()]');
    await expect (Last_Element_1).toBeVisible();
    console.log ("The Last Element of the page is: ", await Last_Element_1.textContent());

//7. Locating Elements using XPath- Position Function > position()

    const Last_Element_2 : Locator = page.locator('//div[@class="column follow-us"]//li[position()=5]');
    await expect (Last_Element_2).toBeVisible();
    console.log ("The Last Element of the page is: ", await Last_Element_2.textContent());


    





})