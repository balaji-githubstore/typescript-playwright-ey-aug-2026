export class Employee {
    public id: number;
    public name: string;
    public salary: number;
    public performance: string;
    public static companyName: string;

    constructor(id: number, name: string, salary: number, performance: string) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.performance = performance;
    }

    //non-static method
    public displayEmployeeRecord(): void {
        console.log("Employee Id: " + this.id)
        console.log("Employee Name: " + this.name)
        console.log("Employee Salary: " + this.salary)
        console.log("Employee Performance: " + this.performance)
        console.log("Company Name: " + Employee.companyName)
        console.log("---------------------------------------------------------")
    }

    //static method
    public static printCompanyName(): void {
        console.log(Employee.companyName)
    }

}


Employee.companyName = "EY"

let emp1 = new Employee(-101, "John", 8000, "Good")
let emp2 = new Employee(102, "Kim", 9000, "Average")
let emp3: Employee = new Employee(103, "Saul", 4000, "Bad")


emp2.displayEmployeeRecord();
emp1.displayEmployeeRecord();
emp3.displayEmployeeRecord();
