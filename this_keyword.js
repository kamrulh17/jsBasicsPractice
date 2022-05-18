
/* In js, 'this' keyword refers to the object it belongs to.In a function, the owner of the function is the default binding for 'this'. It has different values depending on where it is used.In a method(when a function is used as property of an object), 'this' refers to the owner(of the function) object. If it is not a method then the function is in the global scope so 'this' will refer to the window object(global object).In strict mode,'this' refers to the global object.In strict mode,'this' inside a function is undefined.In an HTML event, 'this' refers to the element that received the event.In call() and apply() method 'this' can refer any object.It is all about default function binding.If we want explicit function binding we need call() and apply(),in that case we can set our desired object for 'this'.  */

/* const person = {
    fname: 'Kamrul' ,
    lname: 'Hasan' ,
    age: 23,
    fullname:  function(){
        //as 'fname' and 'lname' are not in this functions scope so we cannot use fname and lname directly here.
        return this.fname +' '+ this.lname ;
    }
} ;
console.log(person.fullname()) ; */

function myFunction() {
    console.log(this) ; //here 'this' is the 'Window' object.
}
const testObj = {
    property1: 'firstProperty' ,
    testFunction: function() {
        console.log(this) ; //here 'this' is the 'testObj' object
    }
} ;
testObj.testFunction() ;