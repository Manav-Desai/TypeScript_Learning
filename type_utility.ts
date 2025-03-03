/*
Typescript provides some predefined utilities to make the code easy.
We have to simply use the utility and understand their use cases.
*/

// Partial<Type> : This class is used to make all the properties of type / interface optional.

type partialType = {
  a: number;
  b: number;
};

interface partialInterface {
  a: number;
  b: number;
}

type p1 = Partial<partialType>;
type p2 = Partial<partialInterface>;

// Required<Type> : Opposite of Partial . It makes all the properties of type/interface required.

type r1 = {
  a: number;
  b?: boolean;
};

interface r2 {
  a?: number;
  b: boolean;
}

type rr1 = Required<r1>;
type rr2 = Required<r2>;

// Readonly<Type> : It makes all the properties of type / interface readonly.
type User = {
  name: string;
  email: string;
};

type ReadONLY = Readonly<User>;

const readonlyobj: ReadONLY = {
  name: "hello",
  email: "h@h",
};

// readonlyobj.email = "hello"; error not allowed for readonly properties

/*
Record<Keys,Type> : This method is used to create the type at runtime.
It takes keys which are seperated by union and their type as single value.
Here , all the keys have same type assigned.
*/

interface UserInfo {
  age: number;
}

type UserName = "john" | "levi" | "elon" | "jack";

const users: Record<UserName, UserInfo> = {
  john: { age: 34 },
  levi: { age: 34 },
  elon: { age: 34 },
  jack: { age: 34 },
};

/* 
Pick<Type, Keys> : This utility class is used to select the specific properties from the type
Type denotes from which properties should be taken , can be interface or type.
keys is union of keys value to be taken. 
*/

interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

/* 
Omit<Type, Keys> : This utility class is used to remove the specific properties from the type
and select the remaining ones.

Type denotes from which properties should be taken , can be interface or type.
keys is union of keys value to be removed. 
*/

interface ShippingInfoIf {
  city: string;
  state: string;
  country: string;
}

type Random = Omit<ShippingInfoIf, "country">;

/*
ReturnType<Type> : This utility is used to get the return type from the type function
*/

function fun(): string {
  return "Hello";
}

type FuncReturn = ReturnType<typeof fun>;
