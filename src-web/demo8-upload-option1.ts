import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "msedge", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
await page.waitForTimeout(5000);

await page.goto("https://www.ilovepdf.com/pdf_to_word");


await page.locator("xpath=//input[@type='file']").setInputFiles("D:\\Mine\\Balaji Dinakaran Trainer Profile AI 2026.pdf")

await page.waitForTimeout(5000);
await browser.close();

