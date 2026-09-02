// import { areaOfCircle, areaOfSquare } from "./demo2-methods.ts"
import { Car } from "./demo10-car-day7-task3.ts"
import { Employee } from "./demo4-employee-type.ts"


let car1: Car = new Car("TN01AB1234", "Swift", "White", 750000, 50);
let car2: Car = new Car("TN02AB1234", "i20", "White", 950000, 50);



let cars: Car[] = [car1, car2]


console.log(cars[0].carNumber)


let emp1 = new Employee(-101, "John", 8000, "Good")
let emp2 = new Employee(102, "Kim", 9000, "Average")
let emp3: Employee = new Employee(103, "Saul", 4000, "Bad")

let employees: Employee[] = [emp1, emp2, emp3];
console.log(employees[2].name)