// what are javascript objects?

//objects are variables that can store both values and functions.

//values are stored as key : value pairs called properties.

//functions are stored as key : function() pairs called methods.


// Object example

const car = {
    type: "Fiat",
    model: "500",
    color: "white",
}

//Object Literal

{firstName : "John",lastName :"Doe",age:50, eyeColor: "blue"}
//output: {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}


//you can also create an empty object, and add the properties later:

const person = {};

person.firstName = "John";
person.lastName = 'Doe';
person.age = 50;
person.eyeColer = "blue";

console.log(person);


//object properties can be accessed using dot notaion and bracket notaion

console.log(car.type); // output: Fiat
console.log(person.lastName);
//output: Doe


console.log(car["model"]);
//output: 500

console.log(person["age"]);
//output: 50