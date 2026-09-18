import { request } from "playwright"
import assert from "node:assert"

const context = await request.newContext();

const response = await context.get("https://petstore.swagger.io/v2/pet/findByStatus?status=sold");
console.log(response.status())

const jsonBody = await response.json();
console.log(jsonBody)

console.log(jsonBody[0].status)

console.log(jsonBody.length)

//for loop --> 0 to <jsonBody.length
// print status from each index(pet)

for (let i = 0; i < jsonBody.length; i++) {
    // console.log(jsonBody[i].status)
    assert.deepStrictEqual(jsonBody[i].status, "sold")
}


for(let pet of jsonBody)
{
    assert.deepStrictEqual(pet.status, "sold")
}