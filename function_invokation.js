/* A function is not executed when it is defined, it is declared when invoked a function. If the function is not inside any object then it is under the global object, (in browser console it is the 'Window' object,in html page it is the html page itself.). Global variables can easily creat name conflicts and bugs in the program. */

/* function a() {
    console.log('Function is called!') ;
}
window.a() ; // in browser. */

function Person(fname, lname, age) {
    // here, 'this' keyword doesn't have any value, but when an object is created using this constructor function then the 'this' refers to that object.
    this.firstName = fname ;
    this.lastName = lname ;
    this.age = age ;
    this.fullname = function() {
        return this.firstName + this.lastName ;
    }
} ; //It is a constructor function.Here, 'this' keyword refers to the created object.Every object(created from this constructor function) will get all of these properties.

const karim = new Person('Abdul', 'Karim', 25) ;


function myFunction(a, b) {
    console.log(a*b) ;
}
myFunction(3, 5)/*window.myFunction(3, 5);*/; 
//this function is called with the window object.invokation bolte etai bujhacche je ami kar diye funtion take call kortesi.
