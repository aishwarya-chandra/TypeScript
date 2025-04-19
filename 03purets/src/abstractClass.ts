abstract class TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void                  //an abstract method which needs to be defined by class that extends this abstract class

    getReelTime(): number{                     //a method which is not compulsory to be defined again by child class but if defined could be also overwritten in child class
        //some complex calculation
        return 8
    }
}


class Facebook extends TakePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)                 //syntax to define child class extending abstract class
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
}

const hc = new Facebook("test", "Test", 3)            //object of child class

hc.getReelTime()                                      //inherited from abstract class