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
const typedObj : {flag : boolean , num : number , age ?: number} = {
    flag : true,
    num : 56,
};

/*
Note : When we define the object with explicit type , then by default all the properties are treated as compulsary . We have to provide the key value pair . But to make the property optional we can use ? . If the optional property is absent then no problem , if present then , it must statisfy it type.
*/

typedObj.age = 56;





// *************   Working with functions with obj ********************************

function funcObj (person : {fname : string , flag : boolean}) {
    console.log("Fname : " , person.fname);
    console.log("Flag : " , person.flag);
}

funcObj({fname : "Hello" , flag : true});

export {}       // Just to avoid redeclaration error , we will learn later about it