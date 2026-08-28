let a: number = 10     //a is reserved for number 
let b: boolean = true
let c: string = "welcome to the session  "
let d: number



console.log(a)
console.log(b)
console.log(c)

d = 20
// a=10, b=20.2
//sum of a and b and print the result
let num1: number = 10
let num2: number = 10.2

num1 = 30
let result: number = num1 + num2

console.log("the output is " + result)

console.log(typeof num2)

let myName: string = "hello"

console.log(myName)
console.log(typeof myName)

console.log(myName.length)
console.log(myName.charAt(4))

console.log(myName.toLowerCase())

let items: number[] = [10, 20, 30, 40.5, 88]

console.log(items)
console.log(items[2])

// any
// unknown


// object datatype
let browserDetails: { name: string, version: number, isMobile: boolean } = { name: "chrome", version: 9.0, isMobile: true }

let browserDetails1: { name: string, version: number, isMobile?: boolean }

browserDetails1 = { name: "chrome", version: 9.0 }

console.log(browserDetails)
console.log(browserDetails.name)

let z: any = "10.2"

console.log(typeof z)
console.log(z)

let x: unknown = "hello"

// unknown datatype type check is required before using it
console.log((x as string).length)

let u: any = 4
console.log(typeof u)
console.log(u * u)

let u1: unknown = 4
console.log(typeof u1 == "number")
if (typeof u1 == "number") {
    console.log(u1 * u1)
}

// console.log((u1 as number) + (u1 as number))

let browserDetails2: { name: string, version: number, isMobile?: boolean } = { name: "chrome", version: 9.0 }


//create object datatype to collect empId,empName,empSalary and store 101, john, 8000.80
let employee: { empId: number, empName: string, empSalary?: number }


employee = { empId: 101, empName: "john"}

console.log(employee.empId)

if (typeof employee.empSalary == "undefined") {
    console.log("Emp salary is undefined")
}
else {
    console.log(employee.empSalary)
}


let num3:number=8

if(num3<0)
{
    console.log("Negative: "+num3)
}
else if(num3==0)
{
    console.log("It's zero")
}
else{
    console.log("Positive: "+num3)
}


// tuples
// union