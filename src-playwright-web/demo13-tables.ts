/*Assessment Task – DataTables
 
Participants should perform the following actions on the table:
Navigate https://datatables.net/
Select the row for Bruno Nash using the checkbox.
Click Edit for the selected employee.
Enter your First Name.
Enter your Last Name.
Change the Office to Singapore.
Click Update/Save to save the changes.
Print the updated Office value for Bruno Nash from the table.
Export the table as an Excel file.
Save the exported Excel file with an appropriate filename.
 
Expected result: That row record should display the updated first name, last name, and Office = Singapore*/

import { chromium } from "playwright"
 
let browser = await chromium.launch({ channel: "chrome", headless: false })
let context = await browser.newContext()
let page = await context.newPage()
 
await page.goto("https://datatables.net/")


const rowcount = await page.locator(`xpath=//table[@id='myTable']/tbody/tr`).count();
console.log(rowcount);
for(let i=1;i<= rowcount;i++)
{
    const empName=await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${i}]/td[4]`).innerText();
    if(empName.trim()==='Bruno Nash'){
        await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${i}]/td[3]//input[@type='checkbox']`).check();
        
        break;
    }
}

await page.locator(`xpath=//span[normalize-space()='Edit']`).click();
//First Name
await page.locator("xpath=//input[@id='DTE_Field_first_name']").fill("Aria")
//LastName
await page.locator("xpath=//input[@id='DTE_Field_last_name']").fill("Willson")
//Change the Office to Singapore.
//remove the current location
await page.locator("xpath=//div[@class='dte-tag-clear']").click()
//add the new location
await page.locator("xpath=//button[@class='dte-tag-add']").click()
await page.locator("xpath=//table[@id='DataTables_Table_0']/tbody/tr[5]/td[1]").click();

await page.locator("xpath=//button[text()='Update']").click()

/*

const rowCount = await page.locator("//table[@id='myTable']/tbody/tr").count();

for(let i=1;i<= rowCount;i++){
    const name=await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${i}]/td[2]`).innerText();

    if(name.includes("Guna"))
    {
        let updateOffice = await page.locator(`xpath=//table[@id='myTable']/tbody/tr[${i}]/td[5]`).innerText();
        console.log("Updated Office location:",updateOffice);

        break;
    }
}

*/
 

await page.waitForTimeout(100000);
await browser.close();