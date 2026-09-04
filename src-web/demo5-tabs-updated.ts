import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
//page --> points to 1st tab
await page.goto("https://opensource-demo.orangehrmlive.com/");


// const [title1,title2,title3]=await Promise.all([page.title(),page.title(),page.title()])

const [newPage,]=await Promise.all([page.waitForEvent("popup"),
    page.locator("xpath=//a[text()='OrangeHRM, Inc']").click()])

await newPage.locator("xpath=//button[text()='Book a Free Demo']").click();
await newPage.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John Wick")
// // enter phone number as 92939329

await page.waitForTimeout(5000);
await browser.close();

