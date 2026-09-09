export const validLoginData = [
    { username: "admin", password: "pass", language: "English (Indian)", expectedValue: "Calendar" },
    { username: "clinician", password: "clinician", language: "English (Indian)", expectedValue: "Calendar" }
]

// console.log(validLoginData)

// console.log(validLoginData[0].username)
// console.log(validLoginData[1].password)



for (const data of validLoginData) {
    console.log(data.username)
    console.log(data.password)
    console.log(data.language)
    console.log(data.expectedValue)
    
}


for(let i=0;i<validLoginData.length;i++)
{
    console.log(validLoginData[i].username)
    console.log(validLoginData[i].password)
    console.log(validLoginData[i].language)
    console.log(validLoginData[i].expectedValue)
}


for (const { username, password, language, expectedValue } of validLoginData) {
    console.log(username)
    console.log(password)
    console.log(language)
    console.log(expectedValue)
    console.log(`verify valid login ${username} and ${password}`)
}