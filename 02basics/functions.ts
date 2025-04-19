function addTwo(num: number): number{   //(function addTwo(): number) tells that return type of this function have to be number
     return num + 2
    //return "hello"
}

function getUpper(val: string){         //val: string is necessary as if not told if will give (val: any) which should not be used
    return val.toUpperCase()            //that means in variable, it itself type check but in function's parameter, it does not type check, instead give any
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}  //isPaid: boolean = false is a way to tell that default value of isPad is false

let myValue = addTwo(5)
getUpper("aish")

signUpUser("aish", "aish@lco.dev", false)
loginUser("a", "a@a.com")


//case where function return type could be more than one, discussed further in union type

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {  //function return type in an arrow function
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
    // return 1   //gives error
})

function consoleError(errmsg: string): void{    //void here tells that the function does not return anything
    console.log(errmsg);
    // return 2;        //gives error
    
}

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}


export {}