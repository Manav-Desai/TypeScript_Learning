/*
Interface is simply a way to define the custom type . It allows us to define a custom
type , similar to that of using type keyword.
*/

interface User {
    readonly userId : number , 
    name : string,
    email : string,
    googleId ?: string,
    startTrial() : string,      // Defining a method inside interface
    getCuppon(cuppon : string) : string, 
}

const user : User = {
    userId : 123,
    name : "John",
    email : "john@email",
    googleId : "john@gmail",
    startTrial : function () {
        return "Trail started";
    },
    getCuppon : (nameOfCuppon : string) => {
        return `Here is your cuppon : ${nameOfCuppon}`;
    }
}