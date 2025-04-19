const score: Array<number> = []                                   //way to define type of an array
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{           //function type bool or number and same goes for the val parameter
    return val
}

function identityTwo(val: any):any{                                    //here if val is number type function return type could be string also as it is written any
    return val
}

function identityThree<Type>(val: Type): Type {                     //THE GENERIC SYNTAX, here whatever is passed in type, will be type for both parameter and function return
    return val
}
 
// identityThree(true)                                               //like here the type is boolean

function identityFour<T>(val: T): T {                                //instead of Type, any letter,word could be written, means same the generic syntax
    return val
}

interface Bottle{                                                 //creating own type
    brand: string,
    type: number
}

// identityFour<Bottle>({})                                       //passing it as generic

function getSearchProducts<T>(products: T[]): T {                //generic as array
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}


const getMoreSearchProducts = <T,>(products: T[]): T => {           //<T,> comma here is used to tell that this is a generic syntax and not a html tag or something
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {        //here two generic type are used T and U where U extends databse, i.e, U could be of type database, basically U generic is constrained here
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})            //using T, U generic and function call

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{                   //a generic class
    public cart: T[] = []            //creating array of that generic type

    addToCart(product: T){           //adding product of that generic type
        this.cart.push(product)
    }
}