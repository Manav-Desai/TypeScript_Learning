/*
In typescript , we have to specify the properties along with its type.
We can also make the property readonly , by adding readonly keyword in the property declaration.

If we don't initialise a property in the constructor , then we have to specify its value
in the property declaration
*/

class User {
  // property declaration
  name: string;
  email: string;
  age: number;
  readonly temp = 5;

  // constructor
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

let user = new User("john", "john@gmail", 20);
console.log(user);

export {};
