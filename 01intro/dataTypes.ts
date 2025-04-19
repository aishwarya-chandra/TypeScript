let greetings: string = "Hello Aishwarya";

greetings.toLowerCase()
console.log(greetings);

// number
// let userId: number = 334455.3  //typescript is smart and deduces itself that userId is number from 334455.3 that's why writing ": number" is redundant
let userId = 334455.3 //javascript refers both int and float as number

//when you do userId.___  , it gives suggestions of only those properties which a number can have

userId.toFixed()
// userId = "aish" //gives error of a number type assigned string type


// boolean
let isLoggedIn: boolean = false


// any - where type checking is not happening so you should yourself put the type because typescript is not doing it by itself

// let hero; //like here the type is any, but typescript is used for type safety which is not getting fulfilled here so write it's type by yourself.
let hero: string;

function getHero(){
    return "thor"
}

hero = getHero()



export {}