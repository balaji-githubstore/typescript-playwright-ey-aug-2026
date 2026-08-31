export function areaOfCircle(radius: number): number {
    return 3.14 * radius * radius;
}


function areaOfRectangle(length: number, width: number): number {
    return length * width;
}

function areaOfTriangle(base: number, height: number): number {
    return (base * height) / 2;
}
function areaOfSquare(side: number) {
    return side * side;
}

function getMyName(): string {
    return "Balaji Dinakaran";
}

function close(): void {

}

function add(a: number, b: number = 10, c?: number) : number{
    if (typeof c == "undefined") {
        return a + b;
    }
    else {
        return a + b + c;
    }
}


let output: number = areaOfCircle(10)
console.log(output)

output = areaOfRectangle(2, 2.2)
console.log(output)

console.log(areaOfTriangle(25, 1))

console.log(areaOfSquare(3))

let name: string = getMyName()
console.log(name)

close()

// named parameters
function add2({num1,num2}:{num1:number,num2:number}):number
{
    return num1+num2;
}

output=add2({num2:20,num1:10})
console.log(output)

//create areaOfTriangle method with named parameter



