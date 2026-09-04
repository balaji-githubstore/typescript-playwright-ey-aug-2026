import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "msedge", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
await page.waitForTimeout(5000);

await page.goto("https://www.ilovepdf.com/pdf_to_word");

//run filechooser event to get filechooser window 
const promiseFileChooser=page.waitForEvent("filechooser");

//click on element to open filechooser window 
await page.locator("xpath=//span[text()='Select PDF file']").click();
//await and get filechooser window from called event 
const fileChooser= await promiseFileChooser
await fileChooser.setFiles("D:\\Mine\\Balaji Dinakaran Trainer Profile AI 2026.pdf")


const [fileChooser1,]= await Promise.all([page.waitForEvent("filechooser"),page.locator("xpath=//span[text()='Select PDF file']").click()]);
await fileChooser1.setFiles("D:\\Mine\\Balaji Dinakaran Trainer Profile AI 2026.pdf")


await page.waitForTimeout(5000);
await browser.close();