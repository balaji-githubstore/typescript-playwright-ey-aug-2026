import { request } from "playwright"
import assert from "node:assert"

const context=await request.newContext();

const response=await context.get("https://petstore.swagger.io/v2/pet/800");
console.log(response.status())

const jsonBody=await response.json();
console.log(jsonBody)
console.log(jsonBody.message)


assert.deepStrictEqual(response.status(),404)
assert.deepStrictEqual(jsonBody.message,"Pet not found")

