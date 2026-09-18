//task 1:
import { chromium } from "playwright";
 
const browser = await chromium.launch({channel: "chrome", headless: false});

//context  
const context = await browser.newContext({viewport:{width:1920,height:1032}})

const page = await context.newPage();
 
await page.goto("https://www.salesforce.com/in/sales/free-trial/ee/");
 
// First Name
await page.locator("css=input[name='firstName']").fill("John");
 
// Last Name
await page.locator("css=input[name='lastName']").fill("wick");
 
// Email
await page.locator("css=input[name='email']").fill("john@gmail.com");
 
// Job Title
await page.locator("css=input[name='jobTitle']").fill("IT Manager");

//Company
await page.locator("css=input[name='company']").fill("EY-GDS");
 

// Country
await page.locator("css=select[name='country']").selectOption({ label: "United Kingdom" });

// Employees 
await page.locator("css=select[name='employees']").selectOption({ label:"100-199 employees"});
 
 
// // Checkbox
// //await page.locator(".checkbox-ui").click();
// //await page.locator("css=i.checked-icon").click();
// await page.locator("//xpath=i[@aria-label='check']").click();
// await page.locator('//input[@type="checkbox"]').check();
// xpath=//div[text()='Enter a valid phone number']
await page.locator("css=div[class='checkbox--faux']").check();

// Start Free Trial
await page.locator("css=button[type='submit']").click();
 
let message1 : string = await page.locator("text=Enter valid phone number.").innerText();
console.log(message1)

// avoid using nth() 
// let message2:string = await page.locator("div").filter({hasText:"Enter valid phone number."}).nth(12).innerText();
// console.log(message2)
 
let message3 : string = await page.getByText("Enter valid phone number.").innerText();
console.log(message3)

let message4 : string = await page.getByText("valid phone",{exact:false}).innerText();
console.log(message4)



await page.waitForTimeout(5000);
await browser.close();