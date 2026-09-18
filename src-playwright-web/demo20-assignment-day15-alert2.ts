import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://nasscom.in/")



await page.locator("xpath=//a[text()='Become a member']").first().click();
await page.locator("xpath=//input[@id='edit-field-total-revenue-india-0-value']").fill("2");

const promiseDialog = page.waitForEvent("dialog");

await page.locator("xpath=//a[@id='calculate-fee']").click();
const dialog = await promiseDialog;


console.log(dialog.message())

await dialog.accept();
await page.waitForTimeout(5000);
await browser.close();