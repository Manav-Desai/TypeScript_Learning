/*
The class which are declared with abstract keyword are the abstract classes.
No instance of the abstract classes can be created.

The class which extends the abstract class must provide the implementation of the
abstract methods or else class must be declared as abstract.

Abstract class can have both abstract and non abstract methods. If the extending class
provide the implementation of non abstract class then it leads to function over ridding.

If we want to call the parent class method from the base class , then it can be called
with super keyword
*/

abstract class Shape {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    console.log("Inside shape class constructor");
    this.x = x;
    this.y = y;
  }

  abstract display(): void;
  hello(): void {
    console.log("Inside hello method of shape class");
  }
}

class Rectangle extends Shape {
  isFlag: boolean;

  constructor(x: number, y: number, isFlag: boolean) {
    super(x, y);
    console.log("Inside Rectangle class constructor");
    this.isFlag = isFlag;
  }

  display(): void {
    console.log("Inside display method of Rectangle");
    console.log(this);
  }

  // hello(): void {
  //   console.log("Hello method overridden");
  //   // super.hello();
  // }
}

let rectangle = new Rectangle(10, 20, true);
rectangle.display();

rectangle.hello(); // try to comment and uncomment hello inside rectangle and see change.
export {};
