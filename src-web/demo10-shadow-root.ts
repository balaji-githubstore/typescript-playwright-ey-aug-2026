import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "msedge", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
await page.waitForTimeout(5000);

await page.goto("https://www.salesforce.com/in/sales/free-trial/ee/");

//enter firstname as john using xpath
await page.locator("css=input[name='firstName']").fill("john")

//since css selector doesn't have direct text find, in playwright for shadowroot, you can use below
await page.locator("text=Start my free trial").click()
await page.waitForTimeout(5000);
await browser.close();