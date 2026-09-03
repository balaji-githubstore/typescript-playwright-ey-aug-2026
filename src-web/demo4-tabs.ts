import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://opensource-demo.orangehrmlive.com/")


// click on OrangeHRM, Inc



//below work I will do it 
// click on Book a Free Demo









await page.waitForTimeout(5000)
await browser.close()