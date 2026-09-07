import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://datatables.net/examples/select/checkbox/checkbox.html")

//get the firstname from the table and print it 


await page.waitForTimeout(5000);
await browser.close();

