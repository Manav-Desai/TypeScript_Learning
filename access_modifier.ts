// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/

/*
There are 3 types of access modifier : public , private and protected.

public :
- By default , the methods and properties have public modifier if we don't specify.
- public properties and methods are accessible within the class as well as outside class.

private : 
- private keyword is used to declare methods and properties as private
- private properties and methods are accessible within class only , not outise.

protected : 
- protected keyword is used to declare methods and properties as protected.
- protected properties and methods are accessible within own class and its subclasses , 
but not outside the class.

IMP POINT FOR GET AND SET : 
GET must provide the type of return value and must have return inside the method.

SET method , type of return is implicit and we should not specify the return type nor return
statement inside the setter method
*/

class User {
  private userID: number;
  name: string; // public as we have not specified.
  age: number;
  protected flag: boolean;
  private courseCount = 1;

  constructor(userId: number, name: string, age: number, flag: boolean) {
    this.userID = userId;
    this.name = name;
    this.age = age;
    this.flag = flag;
  }

  // getter and setter example for courseCount field
  get courseCountGetter(): number {
    console.log("Inside the getter method of course count");
    return this.courseCount;
  }

  set courseCountSetter(value: number) {
    console.log("Inside the setter method of course count");
    if (value > 1) this.courseCount = value;
  }

  displayUser() {
    console.log("Inside the display user method : ");
    console.log(this);
  }
}

let user = new User(101, "abcd", 5, true);
console.log(user.name, user.age);

// console.log(user.userId , user.flag);  // error
console.log(user.courseCountGetter);
user.courseCountSetter = 10;
console.log(user.courseCountGetter);

// using methods
user.displayUser();

/*
extends keyword is used for inheritance . Public and Protected members take part in inheritance
but private doesn't .
*/
class Subclass extends User {
  isFamily: boolean;

  constructor(
    userId: number,
    name: string,
    age: number,
    flag: boolean,
    isFamily: boolean
  ) {
    super(userId, name, age, flag);
    this.isFamily = isFamily;
  }

  displayOfSubclass() {
    console.log(this);
  }
}

const sub = new Subclass(102, "hello", 4, false, true);
console.log(sub);
sub.displayUser();
export {};
