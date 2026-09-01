async function areaOfCircle(radius: number): Promise<number> {
    return 3.14 * radius * radius;
}


let result:number=await areaOfCircle(5)


console.log(result)
console.log(await areaOfCircle(10))
