/*
Intersection is used to create the custom type based on available type.
It refers to the Intersection operation of set theory.
& is used to denote it.
*/

type HasName = {
    name : string,
}

type HasAge = {
    age : number,
}

type Intersection = HasName & HasAge;

let obj : Intersection;

obj = {name : "hello" , age : 3};
// obj = {name : "hello"};      // error 
// obj = {age : 5};      // error 

export {}