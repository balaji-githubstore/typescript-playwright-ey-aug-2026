//arg as object type
function demo0(a: {name: string,version: number,isMobile?: boolean}) {

}

demo0({ name: "jack", version: 4, isMobile: true })

interface DemoOption {
    name: string,
    version: number,
    isMobile?: boolean
}

//argument as interface
function demo1(a: DemoOption) {

}


demo1({ name: "jack", version: 4, isMobile: true })

function demo2(policyNumber: number | string) {

}

demo2("33")

function demo3(options: { id: number, name: string }, authorName: string) {
    console.log(options.id)
    console.log(options.name)
}

demo3({ id: 1, name: "jack" }, "bala")




export interface ViewportSize {
    /**
     * page width in pixels.
     */
    width: number;

    /**
     * page height in pixels.
     */
    height: number;
}



function demo5(arg: ViewportSize) {
    console.log(arg.width);
    console.log(arg.height)
}



demo5({width:10,height:20})
