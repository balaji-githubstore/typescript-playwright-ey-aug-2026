export class Employee {
    private _id: number;
    public name: string;
    private _salary: number;
    public performance: string;
    public static companyName: string;

    constructor(id: number, name: string, salary: number, performance: string) {

        if (id > 100) {
            this._id = id;
        }
        else {
            console.log("id is invalid. So assiging 0 to it!!!")
            this._id = 0;
        }

        this.name = name;
        this._salary = salary;
        this.performance = performance;
    }

    public displayEmployeeRecord(): void {
        console.log("Employee Id: " + this._id)
        console.log("Employee Name: " + this.name)
        console.log("Employee Salary: " + this._salary)
        console.log("Employee Performance: " + this.performance)
        console.log("Company Name: " + Employee.companyName)
        console.log("---------------------------------------------------------")
    }

    
    //set property - write
    public set salary(value: number) {
        if (value > 0) {
            this._salary = value;
        }
        else {
            this._salary = 0;
            console.log("Salary should be greater than 0")
        }
    }

    //get property - read
    public get salary(): number {
        return this._salary;
    }

}


Employee.companyName = "EY"

let emp1 = new Employee(101, "John", 8000, "Good")
let emp2 = new Employee(-102, "Kim", -9000, "Average")
let emp3: Employee = new Employee(103, "Saul", 4000, "Bad")

//set 
emp1.salary=-9000
emp2.salary=9000


console.log(emp1.salary)
console.log(emp2.salary)