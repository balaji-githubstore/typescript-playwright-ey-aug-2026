async function getDBConnection():Promise<string>{

    for(let i=1;i<=10;i++)
    {
        console.log(i);
        //curresnt task - wait for 1s 
        await new Promise(r=>setTimeout(r,1000))
    }
    
    return "Connected to db";
}

//takes 10s to establish connection 
let runDBConnection=getDBConnection()
let runDBConnection1=getDBConnection()
let runDBConnection2=getDBConnection()
console.log("some other task like updating excel1")
console.log("some other task like updating excel2")
console.log("some other task like updating excel3")
console.log("some other task like updating excel4")
console.log("some other task like updating excel5")

//getDBConnection() is running in the background and now below code will wait for that called method to complete 
let result:string=await runDBConnection
console.log(result)