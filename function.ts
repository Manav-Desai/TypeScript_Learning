// In this we will learn , how to work with function in ts.

function sum(a : number , b : number) {
    return a+b;
}

console.log(sum(3,2));

// working with arrow function
let login = (name : string , age : number , isAdmin : boolean) => {
    console.log("Inside arrow function");
    console.log("name : " , name);
    console.log("age : " , age);
    console.log("isAdmin : " , isAdmin);
}

login("John" , 20 , false);

// we can also use default value of function parameter , same as that of js

function greetFn(name : string , age : number , isAdmin : boolean = false){
    console.log(`Hello ${name} , with age of ${age} and you are admin : ${isAdmin}`);
}

greetFn("John" , 10 , true);  // if we specify value , then it takes it.
greetFn("Jim" , 11);  // if we don't specify then it will take default value of parameter



// ******* We can also specify the return type of a function by : type , before curly braces

function addTow (num : number) : number {
    return num + 2
}

let checkEven = (num : number) => {
    return (num % 2) == 0;
}
checkEven(2);

// When the function does't return anything type is void , typescript by default adds the void type , but it is good practice if we specify void

let voidFn = () : void => {
    console.log("Hello in voidFn");
}
voidFn();


// ************    When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.   *************

let arr = [1,2,3,4,5];
arr.map( (x) => x+2 );      // here type of x will be number , we don't have to explicitly tell the number type


// ********** Never Type : The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program. ************

function handleError() : never {
    throw new Error("Inside handleError of function.ts file");
}

export {};