import { chromium } from "playwright"

let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://orangehrm.com/book-a-free-demo")

await page.locator("xpath=//button[@id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']").click()

await page.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John Wick")
await page.locator("xpath=//input[@id='Form_getForm_Email']").fill("john@gmail.com")
// enter phone number - 99898
// enter company name - EY
// enter job title - QA 

// select country as India 
// await page.locator("xpath=//select[@id='Form_getForm_Country']").selectOption({label:"India"})
// select employee count - 51 - 200 

//click on Get a Free Demo
await page.locator("xpath=//select[@id='Form_getForm_Country']").selectOption({ label: "India" })
await page.locator("xpath=//select[@id='Form_getForm_NoOfEmployees']").selectOption({ label: "51 - 200" })

await page.locator("xpath=//input[@id='Form_getForm_action_submitForm']").click()

await page.waitForTimeout(8000)
await browser.close()