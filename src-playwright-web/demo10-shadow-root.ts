import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "msedge", headless: false });
let context = await browser.newContext();
let page = await context.newPage();

await page.goto("https://www.salesforce.com/in/sales/free-trial/ee/");

//enter firstname as john using xpath
await page.locator("css=input[name='firstName']").fill("john")

/* Task 1 (Important)
1.        Navigate onto https://www.salesforce.com/in/sales/free-trial/ee/
2.        Enter first name as “John”
3.        Enter last name as “wick”
4.        Enter work email as “john@gmail.com”
5.        Select Job title as “IT Manager”
6.        Select Employees as “101-500 employees”
7.        Select country as “United Kingdom”
8.        Do not fill the phone number
9.        Click on check box 
10.        Click on start my free trial 
11.        Get the error message displayed “Enter a valid phone number” */

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
//since css selector doesn't have direct text find, in playwright for shadowroot, you can use below
// await page.locator("text=Start my free trial").click()
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


await page.waitForTimeout(5000);
await browser.close();