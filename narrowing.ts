/*
When a variable can possess more than one type of data , then type narrowing helps
to prevent the error.
*/

function fn(x: number | string | boolean) {
  // x.toLowerCase()  --> This will not work here because typeof x is not string.
  // although x can take string | number | boolean value , but it can be any of 3 , so it is  not allowed

  if (typeof x === "number") {
    console.log("number");
  } else if (typeof x === "boolean") {
    console.log("boolean");
  } else {
    console.log("string");
  }
}

console.log("\nUsing in operator for narrowing");

interface Admin {
  name: string;
  email: string;
}

interface Account {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Admin | Account): string | boolean {
  if ("isAdmin" in account) {
    // Inside this block typeof account is Admin
    return account.isAdmin;
  } else {
    // Inside this block typeof account is Account
    return account.name;
  }
}

let value = isAdminAccount({ name: "hello", email: "h@h", isAdmin: true });
console.log(`Type : ${typeof value} and value : ${value}`);

value = isAdminAccount({ name: "hello", email: "h@h" });
console.log(`Type : ${typeof value} and value : ${value}`);

// *******************************************************************
console.log("\nUsing instace and typeof type guards\n");

function fn2(param: Date | string) {
  if (param instanceof Date) {
    console.log("Date :", param);
  } else if (typeof param === "string") {
    console.log("String :", param);
  }
}

fn2("hello");
fn2(new Date());
