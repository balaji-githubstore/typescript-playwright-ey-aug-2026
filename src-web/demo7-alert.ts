import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "msedge", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
//page --> points to 1st tab
await page.goto("https://www.nasscom.in/nasscom-membership");


// click on Calculate fee 


await page.waitForTimeout(5000);
await browser.close();