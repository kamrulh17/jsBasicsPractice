/*
Object are a collection of unordered properties.
Boolean,numbers and strings can be objects when defined with 'new' keyword.Functions,arrays,objects,dates,math etc. are always object.All javascript values accept primitives are object.A primitive value is a value that has no properties or methods(string,number,boolean,null and undefined are primitive data types).Primitive values are immutable.We can create object in 4 different ways:
1.Using object literal
2.Using new keyword
3.using Object.create()
4.Using object constructor.

Objects are mutable.They are addressed by reference not by value.

*/


/* let x = 4 ; //we can change x, but we can't change 4.It is a primitive value.Pura jinista change hoye value 4 hoye gese.

const person = {
    name: 'Kamrul' ,
    age : 23
}
person.age = 25; //23 is changed to 25.Pura jinista eki roye gese just property value change hoye gese. */

const person = { //literal(literal method better for readability,its simple and it is faster)
    name : 'Kamrul',
    age: 23
}

const person2 = new Object() ; //using new keyword
person2.name = 'Hasan' ;
person2.age = 23 ;

let x = person ; // It does not copy the person object to x. It is the person itself.Any changes to the person will change the x.Because x and person are the same object.

/* properties can be accessed in three different ways.
1.objectName.propertyName ;
2.objectName["propertyName"] ;
3.objectName[expression] ; // x = "propertyName" ; person[x]    expression must be evaluated to the propertyName.
We can change,add or delete properties.
*/

// for...in loop can go through the properties of an object.

const kamrul = { //nested object
    name:'kamrul' ,
    age: 23,
    jerin: {
        name: 'jerin' ,
        age: 18
    }
}
console.log(kamrul.jerin.name) ;

//properties of object can be array also, and element of those arrays can also be an object.It can be nested as we want.

const myObj = {
    name: 'Salah',
    age:35 ,
    cars: [
        {name: 'BMW', models: [2018, 2020, 2021]},
        {name: 'Audi', models: [2017, 2021, 2022]}
    ]
};
console.log(myObj.cars[0].name) ;
console.log(myObj.cars[1].models[0]) ;

/* How can we use toUppercase() method to a string(though string is a primitive value)?.It is because the prototype of string is 'String' and in that object there is a method as 'toUppercase'.So the string can be considered as new String("Bangladesh"), than we can access the methods of 'String'. That means toUppercase() is a built in method which is inside the String object. */

const testObj = { //nested object
    name:'kamrul' ,
    age: 23 ,
    fullname: function() {
        return this.name + 'Hasan' ;
    }
}
console.log(testObj.fullname) ; //will return the function definition,because we are accessing the 'fullname' property.

console.log(testObj.fullname()) ;//accessing the method

const personObj = {
    fname: 'Kamrul' ,
    lname: 'Hasan' ,
    age: 23 ,
    fullName: function(){
        return this.fname + this.lname ;
    }
} ;
for (i in personObj) {
    console.log(personObj[i]) ;
}

Object.values(personObj) ; //will return an array containing the name of the properties.
//JSON.stringify(objectName) can be used to convert an object to string and then we can display it.

console.log(JSON.stringify(personObj)) ;