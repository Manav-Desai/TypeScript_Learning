function identify<T>(value: T): T {
  console.log(`Type : ${typeof value} and value : ${value}`);
  return value;
}

identify<number>(5);
identify<string>("hello");

// with generics we can also pass our custom type , interface or class also.

type A = {
  x: number;
};

interface B {
  y: string;
}

identify<A>({ x: 5 });
identify<B>({ y: "hello" });

// generics with functions

function getSearchProducts<T>(products: T[]): T {
  let myindex = 2;
  return products[myindex];
}

let arrowFn = <T>(products: T[]): T => {
  let myindex = 2;
  return products[myindex];
};

console.log("Using normal generic fn :", getSearchProducts<number>([1, 2, 3]));
console.log("Using arrow generic fn :", arrowFn<string>(["a", "b", "c"]));

/* ************************************************************************************ */
// Working with generics in class.

console.log("\n\nWorking with generics in class\n\n");

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
  displayCart() {
    console.log(this.cart);
  }
}

let items = new Sellable<number>();
items.addToCart(1);
items.addToCart(2);
items.addToCart(3);

items.displayCart();

interface product {
  name: string;
  price: number;
}

let product_items = new Sellable<product>();
product_items.addToCart({ name: "apple", price: 100000 });
product_items.addToCart({ name: "vivo", price: 20000 });

product_items.displayCart();

// *********************************************************************************************
// Generics with interface
console.log("\nWorking with generic interfacen\n");

interface KeyValue<T, U> {
  key: T;
  value: U;
}

let data: KeyValue<string, number> = { key: "temperature", value: 25 };
console.log(data);

export {};