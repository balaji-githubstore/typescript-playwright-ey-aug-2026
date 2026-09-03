import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
//page --> points to 1st tab
await page.goto("https://app.thetestingacademy.com/playwright/frames/");

//enter vehicle name as creta




await page.waitForTimeout(5000);
await browser.close();