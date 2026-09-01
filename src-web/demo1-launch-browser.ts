import { chromium } from "playwright"

//using playwright instance - getting Browser instance 
let browser=await chromium.launch({channel:"chrome",headless:false})

// getting BrowserContext instance 
let context=await browser.newContext()

// getting FirstTab - Page instance 
let page=await context.newPage()

await page.goto("https://www.google.com/")

let actualTitle:string= await page.title()
console.log(actualTitle)


await page.waitForTimeout(5000)
await browser.close()