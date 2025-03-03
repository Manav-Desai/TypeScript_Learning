/*
Type assertion is used when we are sure about the type of data.
*/

let age: string | number;

age = 10;
(age as number).valueOf();

age = "hello";
(age as string).toLowerCase();

// another use case
interface Person {
  name: string;
  age: number;
}

const obj = {} as Person;

// If we remove as Person from above declaration , ts assumes that typeof obj is empty {}
// and it doesn't allow to access name , age. So by using as Person we are telling
// that it is of type Person , as for now it doesn't have value , but it may have in future

console.log(obj);
obj.name = "hello";
obj.age = 10;
console.log(obj);

// Another syntax :
let obj1 = <Person>{};
let t: string | number;

t = 10;
(<number>t).valueOf();

t = "hello";
(<string>t).toLowerCase();

console.log(obj1);
obj1.name = "temp";
obj1.age = 10;
console.log(obj1);
export {};
