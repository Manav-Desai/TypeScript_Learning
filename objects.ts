// defining objects without type: 
let course = {
    name : "ts",
    price : 400,
}
console.log(course);
// course.hello = "world"  // This will give error as hello property do not exists.
/*
Note : When we define the object using literal , ts takes the properties and their
values as the type defination , so it doesn't  allow to modify the type or add new property
*/

// course.name = 56;   // Error , name is of type string
// course.price = "hello";      // Error , price is of type number         


// defining object with type
const typedObj : {flag : boolean , num : number , age : number} = {
    flag : true,
    num : 56,
    age : 12,
};

typedObj.age = 56;





// *************   Working with functions with obj ********************************

function funcObj (person : {fname : string , flag : boolean}) {
    console.log("Fname : " , person.fname);
    console.log("Flag : " , person.flag);
}

funcObj({fname : "Hello" , flag : true});


/*
*****************************    readonly    ***************

It is a keyword which is used to make the property or variable readonly preventing
any modification.

readonly can be used with arrays , objects , classes , interface , type.
*/

const readonlyobj : { readonly name : string,id : number} = {name : "hello" , id : 3}

console.log(readonlyobj);
readonlyobj.id = 34;
// readonlyobj.name = "temp";       // This will give error as name property is readonly

export {}       // Just to avoid redeclaration error , we will learn later about it