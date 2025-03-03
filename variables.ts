/*
While declaring variable , we can specify the type of value that variable can hold
syntax : let/var/const v_name:type = value;

if we don't provide type , but give the value then it will be taken automatically.
if we neither provide value nor type , then it will be of type = any , which means a variable can have data of any type. 
*/

let greeting: string = "Hello";
console.log(greeting);
console.log(greeting.toLowerCase());

let userId: number = 56.36;
console.log(userId);

let flag: boolean = true;
console.log(flag);

let age = 34; // age will be of type number
console.log(age);

let fname = "Manav"; // fname will be of type string

/*
any : when we don't know what type of data do the variable contain in future.
While declaration , if we don't provide any value or type , then it is inferred as any
*/

let hero; // hero is of type any same as --> let hero : any;

function greet() {
  return "Hello";
}

hero = greet(); // hero is of type any
console.log("Function return : ", hero);

hero = 36.58;
console.log("Number hero : ", hero);

export {};
