/*
Interface is simply a way to define the custom type . It allows us to define a custom
type , similar to that of using type keyword.
*/

interface User {
  readonly userId: number;
  name: string;
  email: string;
  googleId?: string;
  startTrial(): string; // Defining a method inside interface
  getCuppon(cuppon: string): string;
}

const user: User = {
  userId: 123,
  name: "John",
  email: "john@email",
  googleId: "john@gmail",
  startTrial: function () {
    return "Trail started";
  },
  getCuppon: (nameOfCuppon: string) => {
    return `Here is your cuppon : ${nameOfCuppon}`;
  },
};

// interface can be redeclared .
interface if1 {
  t: number;
}

interface if1 {
  a: string;
}

// now if1 has both t and a property

/*
We can extend one or more interface , the final interface all the properties
of extended interface , along with its custom defined if present
*/

interface temp extends if1, User {
  temp_t: number;
}

export {};
