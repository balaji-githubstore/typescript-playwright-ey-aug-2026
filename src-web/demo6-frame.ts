import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
//page --> points to 1st tab
await page.goto("https://app.thetestingacademy.com/playwright/frames/");


const vehicleFrame=page.frameLocator("xpath=//iframe[@name='vehicle-form']");

//enter vehicle name as creta
await vehicleFrame.locator("xpath=//input[@name='vehicleName']").fill("Creta");
await vehicleFrame.locator("xpath=//input[@name='ownerName']").fill("John");

//registration number TN 13 AY6767
//vechicle type as SUV
// year - 2020
// notes - 6 year old
//click on submit 


await page.waitForTimeout(5000);
await browser.close();