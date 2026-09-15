import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://nasscom.in/")



await page.locator("xpath=//a[text()='Become a member']").first().click();
await page.locator("xpath=//input[@id='edit-field-total-revenue-india-0-value']").fill("2");

page.on("dialog", async dialog => {
    let actualmessage = dialog.message();
    console.log(actualmessage);
    dialog.accept();
});

await page.locator("xpath=//a[@id='calculate-fee']").click();
await page.locator("xpath=//a[@id='calculate-fee']").click();

await page.waitForTimeout(5000);
await browser.close();