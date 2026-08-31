export class Employee
{
    public id:number;
    public name:string;
    public salary:number;
    public performance:string;
    public companyName:string;

    constructor(id:number,name:string,salary:number,performance:string,companyName:string)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.performance=performance;
        this.companyName=companyName;
    }
}


let emp1=new Employee(101,"John",8000,"Good","EY")
let emp2=new Employee(102,"Kim",9000,"Average", "EY")
//create third object

console.log(emp1.id)
console.log(emp1.name)

console.log(emp2.id)
console.log(emp2.name)