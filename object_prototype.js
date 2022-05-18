/* Every object, created from this constructor function will have all the properties and methods.We can add a new property to and object but we cannot add a property to the constructor function. */
function Person(fname, lname, age) { //convention: first letter of constructor function is capital.
    this.firstName = fname ;
    this.lastName = lname ;
    this.age = age ;
    this.fullname = function() {
        return this.firstName + this.lastName ;
    }
} ;
const rahim = new Person('Abdur', 'Rahim', 28) ; //rahim object is created

rahim.country = 'Bangladesh' ;// we can add a property to the object
console.log(rahim) ;
/* Person.country = 'Bangladesh' ;//it will not work(it will not create 'country' property to the object) */

Person.prototype.country = 'Bangladesh' ;// Here 'country' prototype is added to the function constructor, each object created from this constructor function, will have "country: 'Bangladesh'" property.All the objects will inherit the prototype.

const karim = new Person('Abdul', 'karim', 28) ;
console.log(karim) ;
console.log(karim.country) ; //It will display 'Bangladesh'(first it will search for 'country' property in the karim object, as thee is no such property then it will search if there is a prototype named'country'. )



/* 
Here , str is a string, how did we use toUpperCase() method to a string?? Because, js thinks it as "const str = new String('Bangladesh')" , in that String() constructor there is a prototype function named 'toUpperCase()'.So, that prototype will be available for all strings, thus we can use toUpperCase()  method for a string.So can we put our own prototype to String() constructor?? Yes.But it can crash the whole software.
*/
const str = 'Bangladesh' ;
console.log(str.toUpperCase()) ;



String.prototype.sleeping = function(){
    console.log('I am sleeping') ; // we modified the default String() constructor function by adding a prototype called 'sleeping'.Now any string can inherit this whether it is written in literal syntax or as object.
}
let newStr = 'ABCDEFGHIJK' ;
console.log(newStr.sleeping()) ; //sleeping() prototype is called.

/* [N.B. Never ever modify any built in prototype, only modify your own prototype.] */