/*
Union operator is used to combine the types , similar to OR operation
if there are 2 types A and B , union of A and B = A | B.
*/

type HasName = {
    name : string,
}

type HasAge = {
    age : number,
}

type union = HasName | HasAge;
let obj : union;

obj = {name : "hello"};     // obj has property of HasName
obj = {age : 3};            // obj has property of HasAge
obj = {name : "hello" , age : 3};   // obj has both HasName and HasAge propery

export {};