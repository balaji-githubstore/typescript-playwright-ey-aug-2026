import { request } from "playwright"
import assert from "node:assert"
import fs from 'fs'


const jsonObj = JSON.parse(fs.readFileSync("test-data/pet.json", "utf-8"))
console.log(jsonObj.newPet)

const context = await request.newContext();
const response = await context.post("https://petstore.swagger.io/v2/pet",
    { data: jsonObj.newPet, headers: { "Content-Type": "application/json" } });


console.log(response.status())

const jsonBody = await response.json();
console.log(jsonBody)
console.log(jsonBody.id)
assert.deepStrictEqual(jsonBody.id, 677)