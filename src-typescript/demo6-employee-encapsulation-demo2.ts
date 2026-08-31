export class Employee {
    private _id!: number;
    private _name!: string;
    private _salary!: number;
    private _performance!: string;
    public static companyName: string;


    constructor(id: number, name: string, salary: number, performance: string) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.performance = performance;
    }

    //non-static method
    public displayEmployeeRecord(): void {
        console.log("Employee Id: " + this._id)
        console.log("Employee Name: " + this._name)
        console.log("Employee Salary: " + this._salary)
        console.log("Employee Performance: " + this._performance)
        console.log("Company Name: " + Employee.companyName)
        console.log("---------------------------------------------------------")
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        if (value > 0) {
            this._id = value;
        } else {
            console.log("Id should be greater than 0")
        }
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        if (value && value.trim().length > 0) {
            this._name = value;
        } else {
            console.log("Name should not be empty")
        }
    }

    public get salary(): number {
        return this._salary;
    }

    public set salary(value: number) {
        if (value > 0) {
            this._salary = value;
        } else {
            this._salary = 0;
            console.log("Salary should be greater than 0")
        }
    }

    public get performance(): string {
        return this._performance;
    }

    public set performance(value: string) {
        if (value.toLowerCase() == "good" || value.toLowerCase() == "average" || value.toLowerCase() == "bad") {
            this._performance = value;
        } else {
            console.log("Performance should not be empty. It should be either good or bad or average!!!")
        }
    }

    //static method
    public static printCompanyName(): void {
        console.log(Employee.companyName)
    }
}



let emp1 = new Employee(101, "John", 8000, "Good");
let emp2 = new Employee(101, "John", 8000, "not bad");

//call set 
emp1.salary=1002323

//call get
console.log(emp1.salary)

//call method
emp1.displayEmployeeRecord();