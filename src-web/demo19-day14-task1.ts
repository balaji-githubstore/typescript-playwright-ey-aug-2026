import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://www.citigroup.com/global/about-us/global-presence/india")

 
await page.locator("xpath=//button[@id='onetrust-accept-btn-handler']").click();

await page.locator("xpath=//nav[contains(@class,'menuNav')]//div[text()='Careers']").hover();



const [newPage,]=await Promise.all([page.waitForEvent("popup"),page.locator("xpath=//nav[contains(@class,'menuNav')]//div[text()='Search Jobs']").click()]);

await newPage.locator("xpath=//button[@id='system-ialert-button']").click();

await page.waitForTimeout(5000);
await browser.close();