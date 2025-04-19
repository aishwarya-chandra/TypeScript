//INTERFACES
//if you are implementing an interface in a class, you need to adhere to all the properties of that interface.
//class can have extra properties but no properties of interface should be left

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(                             //variables from interface in a contsructor
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {                       //functions from interface like this
        console.log("Story was created");
        
    }
}