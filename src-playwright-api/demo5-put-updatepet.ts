import { request } from "playwright"
import assert from "node:assert"

const reqBody = {
    "id": 988,
    "category": {
        "id": 0,
        "name": "string"
    },
    "name": "doggie-9882dssddsdsds",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "988"
        }
    ],
    "status": "available"
}

const context = await request.newContext();
const response = await context.put("https://petstore.swagger.io/v2/pet",
    { data: reqBody, headers: { "Content-Type": "application/json"} });


console.log(response.status())

const jsonBody = await response.json();
console.log(jsonBody)
console.log(jsonBody.id)
assert.deepStrictEqual(jsonBody.id,988)
assert.deepStrictEqual(jsonBody.name,"doggie-9882dssddsdsds")