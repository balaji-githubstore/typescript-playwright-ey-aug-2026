import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://demo.openemr.io/b/openemr/interface/login/login.php?site=default")

await page.locator("css=#authUser").fill("john")
await page.locator("css=#clearPass").fill("john123")
await page.locator("css=select[name='languageChoice']").selectOption({label:"English (Indian)"})



await page.waitForTimeout(5000);
await browser.close();