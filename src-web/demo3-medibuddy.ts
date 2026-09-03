import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://www.medibuddy.in/")

/*
click() 
playwright checks
- visible - yes
- Stable - yes
- Receives Events - as in not obscured by other elements - 
- Enabled - yes 
*/
// await page.setDefaultTimeout(35000)
await page.locator("xpath=//a[text()='Login11']").click()
await page.locator("xpath=//div[text()='I have a Corporate Account']").click()

await page.locator("xpath=//a[text()='Login']").click()
//a[text()='Learn More']
await page.locator("xpath=//a[text()='Learn More']").click()
//a[text()='skip']
await page.locator("xpath=//a[text()='skip']").click()
//a[text()='Login using Username & Password']
await page.locator("xpath=//a[text()='Login using Username & Password']").click()

//input[@id='username']
await page.locator("xpath=//input[@id='username']").fill("jack")
//button[text()='Proceed']
await page.locator("xpath=//button[text()='Proceed']").click()
//input[@id='password']
await page.locator("xpath=//input[@id='password']").fill("welcome123")

//img[@alt='hide-password']
await page.locator("xpath=//img[@alt='hide-password']").click()

//button[text()='Sign In']
await page.locator("xpath=//button[text()='Sign In']").click()

let actualError:string=await page.locator("xpath=//div[contains(text(),'valid username')]").innerText()
console.log(actualError)

await page.waitForTimeout(5000)
await browser.close()