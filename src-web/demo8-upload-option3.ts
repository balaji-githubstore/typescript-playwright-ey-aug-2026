import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "msedge", headless: false });
let context = await browser.newContext();
let page = await context.newPage();
await page.waitForTimeout(5000);

await page.goto("https://www.ilovepdf.com/pdf_to_word");

page.on("filechooser",async fileChooser=>{
    await fileChooser.setFiles("D:/Mine/Balaji Dinakaran Trainer Profile AI 2026.pdf")
});

await page.locator("xpath=//span[text()='Select PDF file']").click();


await page.waitForTimeout(5000);
await browser.close();