// const User = {
//     name: "aish",
//     email: "aish@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "aish", isPaid: false, email: "a@a.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


// //how to create a new datatype and use it i.e, Type Aliases

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{             //here parameter and function's return type is User
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string               //readonly tells that _id cannot be overwritten i.e updated again
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number           //variable_name? tells that this variable is optional, i.e, is can be empty too
}

let myUser: User = {
    _id: "1245",
    name: "a",
    email: "a@a.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

//use existing types to define another type, it will have to fulfill both the type conditions , kinda like type inherited
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "a@gmail.com"
// myUser._id = "asa"








export {}