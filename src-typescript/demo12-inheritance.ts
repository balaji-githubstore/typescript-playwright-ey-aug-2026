class Father {
    public fage: number = 80;
    protected z1: number = 10;

    constructor(a: number) {
        this.fage = a;
        console.log("father constructor")
    }

    public fatherStyle(): void {
        console.log("father style!!!")
    }
}

class Son extends Father {
    public sAge: number = 20;


    constructor(a: number, b: number) {
        super(a);
        this.sAge = b;
        console.log("son constructor");
    }
 
    public sonStyle(): void {
        console.log(this.z1);
        console.log("son style");

        super.fatherStyle();


    }
}

const sobj = new Son(70, 30);

console.log(sobj.fage);
console.log(sobj.sAge);

sobj.fatherStyle();
sobj.sonStyle();

// console.log(sobj.z1)




// class GSon extends Son
// {
//      public gAge: number = 20;
//     constructor(a:number,b:number,c:number)
//     {
//         super(a,b);
//         this.gAge=c;
//           console.log("son constructor");
//     }
// }





// const gson=new GSon(70,30,10);
