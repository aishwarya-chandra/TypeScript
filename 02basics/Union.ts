let score: number | string = 33          // pipe sign (OR symbol) is used to tell that score type could be either number or string
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {name: "aish", id: 334}            //likewise either User or Admin

hitesh = {username: "hc", id: 334}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){        //Union of types in a function parameter
    if (typeof id === "string") {             //have to check type because it could be either
        id.toLowerCase()                      //allowed only on string type
    }
  
}

//array 

const data: number[] = [1, 2, 3]               
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]   //could be either srting,number or bool
const data4: string[] | number[] = ["1", "2", "3"]                 //without brackets, the syntax is wromg, it means it can be either completely string
const data5: string[] | number[] = [1, 2, 3]                       //or completely of number type

let seatAllotment: "aisle" | "middle" | "window"                  //seatAllotment could only be either aisle,middle or window

seatAllotment = "aisle"
// seatAllotment = "crew"                                          //gives error

export {}