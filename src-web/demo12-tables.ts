import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://datatables.net/examples/select/checkbox/checkbox.html")


//write a for loop and then print all name (1 to 10)
//get the firstname from the table and print it 
let name1=await page.locator("xpath=//table[@id='example']/tbody/tr[2]/td[2]").innerText();
console.log(name1)


await page.waitForTimeout(5000);
await browser.close();

