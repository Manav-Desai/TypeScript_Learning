// Other remaining or extra topics

console.log("Index signature in ts");

/*
Index signature in ts allows us to add dynamic properties in the type / interface , if we don't
use index signature and try to access properties dynamically then ts doesn't allow.
*/

interface Normal {
  name: string;
  email: string;
}

/*
The index signature in the Fruits interface ensures that key can have any value , but it is of
type string and its value is of type number.

Index signature are supported both in type and interface.
But Mapped Type (we will learn after this) is supported only in type not in interface
*/

interface Fruits {
  [key: string]: number;
}

let myobj: Normal = {
  name: "hello",
  email: "h@h",
};

let fruits: Fruits = {
  apple: 5,
  banana: 6,
  mango: 7,
};

// This will give error
// function getValue(key: string) : string {
//   return myobj[key];
// }

// 2 solution of this problem : Using index signature and keyof operator
interface solution1 {
  [key: string]: string;
}

let sol1: solution1 = {
  name: "hello",
  email: "h@h",
};

function getValue(key: string): string {
  return sol1[key];
}
console.log(getValue("name"));
console.log(getValue("email"));
console.log(getValue("xyz")); // returns undefined as key is not present

// Another approach is to use keyof operator
// keyof operator will return all the keys of the interface

interface solution2 {
  name: string;
  email: string;
}

let sol2: solution2 = {
  name: "hello",
  email: "h@h",
};

function getValue2(key: keyof solution2): string {
  return sol2[key];
}
console.log(getValue2("name"));
console.log(getValue2("email"));
// console.log(getValue2("dkjdg"));     // not allowed

/************************************************************************************************* */
console.log("\n\nUsing Mapped type : \n\n");

/*
Mapped type is same as that of index signature , the main difference is that mapped type takes
finite set of dynamic keys .
Mapped type works with type only not with interface
*/
type mapped = {
  [key in "apple" | "mango" | "banana"]: number;
};

const obj: mapped = {
  apple: 1,
  mango: 2,
  banana: 3,
};

function getFruitValue(key: keyof mapped) {
  return obj[key];
}

console.log(getFruitValue("apple"));
console.log(getFruitValue("mango"));
console.log(getFruitValue("banana"));

export {}