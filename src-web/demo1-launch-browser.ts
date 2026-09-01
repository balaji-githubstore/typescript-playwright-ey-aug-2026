import { chromium } from "playwright"

let browser=await chromium.launch({channel:"chrome",headless:false})

let context=await browser.newContext()

let page=await context.newPage()


await page.goto("https://www.google.com/")

let actualTitle:string= await page.title()
console.log(actualTitle)


await page.waitForTimeout(5000)
await browser.close()