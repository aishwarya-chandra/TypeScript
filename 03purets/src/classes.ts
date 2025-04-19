//CLASSES in TYPESCRIPT

// class User {
//     public email: string                         //public accessible outside class
//     private name: string                         //private not accessible outside class
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;                       //this.email type is taken from line 2 email
//         this.name = name

//     }
// }


//alternate way to write class

class User {

    protected _courseCount = 1                        //protected let child class to access the method/variable
    
    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }
    private deleteToken(){                          //a private function only accessible within class
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{                   //getters used to expose private/public elements of a class to outside with added conditions
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {                   //setters set from those elements, type in it is not defined as given in official doc
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {                //inheritance of the class User
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const aish = new User("h@h.com","aish")             //creating an object of the class
// aish.name 

// aish.deleteToken()