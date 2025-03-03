interface Shape {
  x: number;
  y: number;
}

interface Shape_methods {
  display(): void;
}

/*
The class which implements the interface must implement all the methods , as well as
properties defined in the interface. It can have additional methods and properties also
*/

class Square implements Shape, Shape_methods {
  x: number;
  y: number;
  isFlag: boolean;
  constructor(x: number, y: number, isFlag: boolean) {
    this.x = x;
    this.y = y;
    this.isFlag = isFlag;
  }
  display(): void {
    console.log("Inside display method");
    console.log(this);
  }
  changeShape(x: number, y: number) {
    console.log("Inside change shape method : ");
    this.x = x;
    this.y = y;
  }
}

let square = new Square(10, 10, true);
square.display();
square.changeShape(5, 5);
square.display();
