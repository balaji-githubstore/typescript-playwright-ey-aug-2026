import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://datatables.net", { waitUntil: "networkidle" })


let rowCount = await page.locator("xpath=//table[@id='myTable']/tbody/tr").count();
console.log(rowCount)


for (let r = 1; r <= rowCount; r++) {
    let name = await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${r}]/td[4]`).innerText();
    console.log(name)

    if (name.trim() === "Bruno Nash") {
        await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${r}]/td[2]`).click();
        break;
    }
}


await page.locator("//span[text()='Edit']").click();

//name
await page.locator("xpath=//input[@id='DTE_Field_first_name']").fill("Priyadharshan");
await page.locator("xpath=//input[@id='DTE_Field_last_name']").fill("S");

//location
await page.locator("xpath=//div[text()='London']").click();
await page.locator("//tr[td[contains(text(),'Singapore')]]").click();

//enter updated val
await page.locator("//button[text()='Update']").click();

await page.waitForTimeout(5000);


for (let p = 1; p < 7; p++) {
    let rowCount1 = await page.locator("xpath=//table[@id='myTable']/tbody/tr").count();
    console.log(rowCount)

    for (let r = 1; r <= rowCount1; r++) {
        let name = await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${r}]/td[4]`).innerText();
        console.log(name)

        if (name.trim() === "Priyadharshan S") {
            let actualOffice = await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${r}]/td[6]`).innerText();
            console.log(actualOffice);
            p=7;
            break;
        }
    }
    await page.locator("xpath=//button[@aria-label='Next']").click();
}




await page.waitForTimeout(5000);
await browser.close()


//will start at 12:10 PM IST