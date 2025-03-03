/*
One way to define the array : type[]
e.g boolean[]  -> array of boolean(true or false)
    number[]   -> array of numbers
    string[]   -> array of strings
*/

const superHeros: string[] = [];
superHeros.push("H1");
superHeros.push("H2");
console.log(superHeros);

/*
Another way is to use generics : Array<type>
*/

const arr: Array<number> = [1, 2, 3];

arr.push(4);
// arr.push("Hello");  // This will give error

// ***********  creating array of custom type ****************
type User = {
  name: string;
  age: number;
};

let userarray1: User[] = [];
userarray1.push({ name: "Hello", age: 3 });
userarray1.push({ name: "Hello1", age: 4 });
userarray1.push({ name: "Hello2", age: 5 });

console.log(userarray1);

let userarray2: Array<User> = [];
userarray2.push({ name: "generic1", age: 3 });
userarray2.push({ name: "generic2", age: 4 });
userarray2.push({ name: "generic3", age: 5 });

// creating 2d array of number
const twoDarray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(twoDarray);

export {};
