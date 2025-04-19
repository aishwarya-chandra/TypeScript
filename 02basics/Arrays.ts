const superHeros: string[] = []       //string is the type of elements in the array
// const heroPower: number[] = []
const heroPower: Array<number> = []   //alternate way of telling the type

type User = {               //new type defined
    name: string
    isActive: boolean
}

const allUsers: User[] = []    //array of User type

const MLModels: number[][] = [          //defining 2d array of type number
    [255, 255, 255],
    []
]


superHeros.push("spiderman")
heroPower.push(2)

allUsers.push({ name: "", isActive: true })

export{}