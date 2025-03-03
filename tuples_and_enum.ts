/*
Tuples in typescript are basically a fixed size array , in which the type of element
at particular position is well defined.
*/

let tuple: [string, number] = ["hello", 1];

tuple[0] = "Hello";
tuple[1] = 1;

console.log(tuple);

/*
Edge case : Tuples allow the array operations such as push , pop etc. on it
and there is no type checking is performed which makes it risky. 
*/

tuple.pop();
tuple.push("Hello"); // at index = 1 , it will be string and it violates our type

console.log(tuple);

/*****************************************************************/

/* 
Enum allows us to define set of named constants. The values of enum can be of number
and string only . Enum allows to use computed properties (result of an expression , 
method or function call) which resolves to a constant value of number or string.

If we don't provide value , then by default it is considered as numeric type with 0
and for subsequent keys , if not provided = previous key + 1 , for numeric only
*/

enum Directions {
  up = "UP",
  down = 1,
  left,
  right,
}

// Both are valid and result to same value.
let up = Directions.up;
let down = Directions.down;
let left = Directions.left;
let right = Directions.right;

console.log(up, down, left, right);

up = Directions["up"];
down = Directions["down"];
left = Directions["left"];
right = Directions["right"];

console.log(up, down, left, right);

// Normal enum are bidirectional : It means we can access value using key and key using value , but this
// only valid for numeric property of enums not for string property of enum

// let key = Directions["UP"];  // This will give an error as string property of enum are not bidirectional
// console.log("Key using UP value : " , key);

let key = Directions["1"];
console.log("Key using 1 value : ", key);

/*
Note : Enum are converted to JS using IIFE and objects and values are evaluated at
runtime . But if we use const keyword while defining enum , then it becomes const enum
and its value is calculated at compile time and no IIFE code is generated.

But , const enum are unidirectional it means we can only access values using keys.
*/

const enum uniDirectional {
  up = "UP",
  down = 1,
  left,
  right,
}

console.log(uniDirectional.up);
// console.log(uniDirectional["UP"]);    // Not allowed to access key using value

export {};
