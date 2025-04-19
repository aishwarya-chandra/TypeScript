//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
//read difference between type aliases and interface

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string           //way to define a function in interface with return type as string
    startTrail(): string                  //alternate way to define a function in interface with return type as string
    getCoupon(couponname: string, value: number): number         //again a function with parameters given
}

interface User {           //interface could have more properties add on like this also called reopening of the interface which is not allowed in type aliases
    githubToken: string
}

interface Admin extends User {                //inheritence in interface, here admin has all properties of user
    role: "admin" | "ta" | "learner"
}

const hitesh: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33