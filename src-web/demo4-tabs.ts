import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
//page --> points to 1st tab
await page.goto("https://opensource-demo.orangehrmlive.com/");


//Start waiting for new page (tab) before clicking. Note no await.
const promisePage=page.waitForEvent("popup");

//click on element that opens a new tab
await page.locator("xpath=//a[text()='OrangeHRM, Inc']").click();

//await on the called waitforEvent method to complete. it will return new tab detail - Page 
const newPage=await promisePage;

//newPage --> points to newly opened tab
await newPage.locator("xpath=//button[text()='Book a Free Demo']").click();
await newPage.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John Wick")
// enter phone number as 92939329

await page.waitForTimeout(5000);
await browser.close();

