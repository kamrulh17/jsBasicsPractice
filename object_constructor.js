/* we can use a constructor function as a blueprint to create many objects. */

function Person(fname, lname, age) { //convention: first letter of constructor function is capital.
    this.firstName = fname ;
    this.lastName = lname ;
    this.age = age ;
    this.fullname = function() {
        return this.firstName + this.lastName ;
    }
} ; //It is a constructor function.Here, 'this' keyword refers to the created object.Every object(created from this constructor function) will get all of these properties.

const karim = new Person('Abdul', 'Karim', 25) ; //a object is created
const rahim = new Person('Abdur', 'Rahim', 28) ;
console.log(karim) ;
console.log(karim.firstName) ;
console.log(karim.fullname()) ;

//we can add a new property to an object as usually, but we cannot add a property to the constructor function.

/* new String(),new Number() etc are also a constructor function as like this. That means they are the blueprint for creating string or number objects.That means, js has built in constructor function called String(), and it has default properties and methods as well. So, when we define a string using the new String() its becomes an object(constructor function creates object), then we are able to access those methods. Note: Math() is a global object, we need not put new keyword. */