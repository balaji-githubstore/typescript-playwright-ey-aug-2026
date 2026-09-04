import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "msedge", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
await page.waitForTimeout(5000);
//page --> points to 1st tab
await page.goto("https://www.nasscom.in/nasscom-membership");

// register the dialog event to handle alert on your own
page.on("dialog",async dialog=>{
     let actualAlertMessage= dialog.message();
     console.log(actualAlertMessage);
     console.log(dialog.type())
     await dialog.dismiss();
})

// click on Calculate fee 
// javascript alerts or dialog are auto-handled by playwright. 
// You can modify the existing behaviour of playwright alert handling using page.on("dialog") event. 
await page.locator("xpath=//a[text()='Calculate Fee']").click();

await page.waitForTimeout(5000);
await browser.close();