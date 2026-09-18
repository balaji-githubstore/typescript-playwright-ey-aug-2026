import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://google.com")

// await page.locator("xpath=//a").nth(0).click()

let linksLocators = await page.locator("xpath=//a")

console.log(await linksLocators.count())
// console.log(await page.locator("xpath=//a").count())

for (let i = 0; i < await linksLocators.count(); i++) {

    await linksLocators.nth(i).highlight()
    let actualText = await linksLocators.nth(i).innerText();
    console.log(actualText)

    let hrefAttValue = await linksLocators.nth(i).getAttribute("href")
    console.log(hrefAttValue)

    console.log("--------------------")
}


let allLinkText=await page.locator("xpath=//a").allInnerTexts()
console.log(allLinkText)


await page.waitForTimeout(5000);
await browser.close();

