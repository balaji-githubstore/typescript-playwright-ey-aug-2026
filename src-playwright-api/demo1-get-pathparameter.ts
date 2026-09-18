import { request } from "playwright"
import assert from "node:assert"

const context=await request.newContext();

const response=await context.get("https://petstore.swagger.io/v2/pet/988");
console.log(response.status())

const jsonBody=await response.json();
console.log(jsonBody)
console.log(jsonBody.id)
console.log(jsonBody.name)
console.log(jsonBody["name"])
console.log(jsonBody.status)
console.log(jsonBody.category.id)
console.log(jsonBody.tags[0].id)
console.log(jsonBody.tags[0].name)

assert.deepStrictEqual(response.status(),200)
assert.deepStrictEqual(jsonBody.id,988)


console.log(response.statusText())

console.log(response.headers())