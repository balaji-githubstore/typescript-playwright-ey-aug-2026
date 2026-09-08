import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://datatables.net/examples/select/checkbox/checkbox.html")

//print names from all pages

for (let p = 1; p < 7; p++) {
    let rowCount = await page.locator("xpath=//table[@id='example']/tbody/tr").count()
    for (let i = 1; i <= rowCount; i++) {
        let name1 = await page.locator(`xpath=//table[@id='example']/tbody/tr[${i}]/td[2]`).innerText();
        console.log(name1)
    }

    if (!await page.locator("xpath=//button[@aria-label='Next']").isDisabled()) {
        await page.locator("xpath=//button[@aria-label='Next']").click();
    }
}






await page.waitForTimeout(5000);
await browser.close();

