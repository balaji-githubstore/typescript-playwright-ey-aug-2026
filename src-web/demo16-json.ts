import fs from 'fs'

// let outputString:string=fs.readFileSync("test-data/data.json","utf-8")


// let jsonObj=JSON.parse(outputString)

// console.log(jsonObj["invalidLoginData"][1])

// console.log(jsonObj["invalidLoginData"].length)

// console.log(jsonObj["myDetails"][0])

const jsonObj=JSON.parse(fs.readFileSync("test-data/data.json","utf-8"))
console.log(jsonObj["validLoginData"][0])