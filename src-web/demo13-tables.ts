import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://datatables.net/examples/select/checkbox/checkbox.html")


let rowCount = await page.locator("xpath=//table[@id='example']/tbody/tr").count()


// click on checkbox when name is Brenden Wagner
for (let i = 1; i <= rowCount; i++) {

    let name = await page.locator(`xpath=//table[@id='example']/tbody/tr[${i}]/td[2]`).innerText();
    console.log(name)

    if(name.trim()==="Brenden Wagner")
    {
        await page.locator(`xpath=//table[@id='example']/tbody/tr[${i}]/td[1]`).click();
        break;
    }
}

await page.waitForTimeout(5000);
await browser.close();

