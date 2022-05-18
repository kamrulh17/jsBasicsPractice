/* In JavaScript all functions are object methods.
If a function is not a method of a JavaScript object, it is a function of the global object.With the call() & apply() methods, we can write a method that can be used on different objects.They can also take arguments.The call() method takes arguments separately.The apply() method takes arguments as an array. */



/* The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).That means we can set the owner object with call(), then 'this' will refer to that object. amra jei object ta call() er vitore parameter hisebe dibo,sei method er vitore 'this' oi object takei refer korbe  */


//call() method
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ' ' + 'from' + ' ' + city + ',' + country;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
console.log(person.fullName.call(person1, 'Dhaka','Bangladesh')) ; // John Doe from Dhaka,Bangladesh .In fullname() method, 'this'will be the person1. ;
console.log(person.fullName.call(person2)) ;// Mary Doe from undefined,undefined. In fullname() method, 'this'will be the person2 ;


//apply() method
const personnn = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const personnn1 = {
  firstName:"John",
  lastName: "Doe"
}

personnn.fullName.apply(personnn1, ["Oslo", "Norway"]);

/* The apply() method is similar to the call() method.
In this example the fullName method of personn is applied on personn1: */
/* The call() method takes arguments separately.
The apply() method takes arguments as an array. */

/* In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object. */