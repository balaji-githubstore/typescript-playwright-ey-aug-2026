import { chromium } from "playwright"

//using playwright instance - getting Browser instance 
let browser=await chromium.launch({channel:"chrome",headless:false})

// getting BrowserContext instance 
let context=await browser.newContext()

// getting FirstTab - Page instance 
//page --> tab 1
let page=await context.newPage()

//page1 --> tab 2
let page1=await context.newPage()


await page.goto("https://www.google.com/")
await page1.goto("https://facebook.com")
let actualTitle:string= await page.title()
console.log(actualTitle)


let page2 = await context.newPage()

await page.waitForTimeout(5000)
await browser.close()