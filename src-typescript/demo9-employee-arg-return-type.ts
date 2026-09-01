class Employee {
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

    public static printEmployeeRecord(x: Employee): void {
        console.log("Employee Id: " + x.id)
        console.log("Employee Name: " + x.name)
        console.log("Employee Salary: " + x.salary)
        console.log("Employee Performance: " + x.performance)
        console.log("Company Name: " + Employee.companyName)
        console.log("---------------------------------------------------------")
    }

    public static getEmployeeInstance(): Employee {
        let emp = new Employee(0, "", 0, "");
        return emp;
    }

}


Employee.companyName = "EY"

let emp1 = new Employee(-101, "John", 8000, "Good")
let emp2 = new Employee(102, "Kim", 9000, "Average")
let emp3: Employee = new Employee(103, "Saul", 4000, "Bad")


emp2.displayEmployeeRecord();
emp1.displayEmployeeRecord();
emp3.displayEmployeeRecord();

Employee.printEmployeeRecord(emp2);
Employee.printEmployeeRecord(emp1);
Employee.printEmployeeRecord(emp3);

let emp4: Employee = Employee.getEmployeeInstance()
emp4.displayEmployeeRecord()

