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

await vehicleFrame.locator("xpath=//input[@name='regNumber']").fill("TN 31 SD 8953")
await vehicleFrame.locator("xpath=//select[@name='vehicleType']").selectOption({label:"SUV"})
await vehicleFrame.locator("xpath=//input[@name='year']").fill("2020")
await vehicleFrame.locator("xpath=//textarea[@name='notes']").fill("6 years old")
await vehicleFrame.locator("xpath=//button[@id='vehicle-submit']").scrollIntoViewIfNeeded()
await vehicleFrame.locator("xpath=//button[@id='vehicle-submit']").click()

//div[@id="vehicle-output"]
let actualValue:string=await vehicleFrame.locator("xpath=//div[contains(text(),'vehicleName')]").innerText()
console.log(actualValue);

await page.waitForTimeout(5000);
await browser.close();