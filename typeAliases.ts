// In this we will learn type aliasing in ts

/*
type keyword is used to define the custom type . It simply used for code resuability 
so that instead of again and again specifying the entire type . We can simply use that
name of custom type . 
*/

type User = {
    name : string,
    email : string,
    isActive ?: boolean,    // optional property
    phone : number,
    lastActiveDate : Date,
}

// Now same as that of other ts types , we can use User type anywhere we want

function printUser(user : User) {
    console.log(user);
}

let userobj : User = {
    name : "hello",
    email : "hello@gmail",
    isActive : true,
    phone : 123456,
    lastActiveDate : new Date(),
}

let optionaluserobj : User = {
    name : "hello",
    email : "hello@gmail.com",
    phone : 123,
    lastActiveDate : new Date(),
}

printUser(userobj);
printUser(optionaluserobj);

/*
Note : When we define the object with explicit type , then by default all the properties
are treated as compulsary . We have to provide the key value pair . But to make the
property optional we can use ? . If the optional property is absent then no problem ,
if present then , it must statisfy it type.

if we provide the optional parameter value , then it takes it
else it will be undefined.
*/

function optionalDemo(name : string , id ?: number) {
    console.log(`Hello ${name} with id : ${id}`);
}
optionalDemo("John" , 123);
optionalDemo("Jim");


/*
Default parameter of the function is same as that of js default parameter.
If we don't provide the value of parameter at the time of function call then it
takes default value.

required parameter cannot follow the default parameter
e.g. in the addNum , if a is default then b has to be default , it cannot be required
*/

function addNum(a : number , b : number = 0) {
    console.log(`${a} + ${b} = ${a+b}`);
}
addNum(10,20);
addNum(5);


// *********** A parameter cannot be both OPTIONAL AND DEFAULT at the same time **********


/*
*****************************    readonly    ***************

It is a keyword which is used to make the property or variable readonly preventing
any modification.

readonly can be used with arrays , objects , classes , interface , type.
*/

const readonlyobj : { readonly name : string,id : number} = {name : "hello" , id : 3}

console.log(readonlyobj);
readonlyobj.id = 34;
// readonlyobj.name = "temp";       // This will give error as name property is readonly

export {}