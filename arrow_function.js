/* Introduced in ES6.It has a shorter syntax.If the function has only one statement and it returns something then we can omit the curly braces and return keyword also.In a regular function, 'this' keyword refers different object that called the function like window, object or button etc... But in arrow function 'this' keyword always refers the object that defines the function. */

/* const myFunction = function() {
    return 3*5 ;
}
console.log(myFunction()) ; */

// it becomes shorter.
myFunction = (a,b) => a*b ;
console.log(myFunction(3,5)) ;

const person1 = {
    fname:'Kamrul' ,
    lname: 'Hasan',
    age: 23,
    fullname: function() {
        return this.fname +' '+ this.lname ;
    }
} ;

const person2 = {
    fname:'MK' ,
    lname: 'Purnota',
    age: 23,
    fullname: function() {
        return this.fname +' '+ this.lname ;
    }
} ;

console.log(person2.fullname()) ; //as person2 object called the function so 'this' will refer to the person2 object.


/* Here, it is a regular function so it returns the value of 'this' depending on which object calls the function.In the first case 'Window' object calls the testFunction so 'this' will return Window object. In second example, an html element calls the testFunction so 'this' will return that html element. */
function testFunction() {
    document.getElementById("demo").innerHTML += this ; //the function just print the value of 'this'
}

window.addEventListener("load", testFunction) ; //window object
document.getElementById("btn").addEventListener("click", testFunction) ; //HTMLElement object




/* In this case, as the function is an arrow function, 'this' will always refer the Window object no matter which object calls it.In arrow function 'this' is the object where the function is defined. */
const testFunction2 = () => {
    document.getElementById("demo2").innerHTML += this ; //the function just print the value of 'this'
}

window.addEventListener("load", testFunction2) ; //window object
document.getElementById("btn2").addEventListener("click", testFunction2) ; //window object\

/* Note: we do not use arrow function in a object, because arrow function doesn't know 'this' keyword in an object. if we do not want to use 'this' then arrow function could be used. */
const newObj = {
    fname:'MK' ,
    lname: 'Purnota',
    age: 23,
    fullname: () => {
        return this.fname +' '+ this.lname ; //here we cannot access 'this'c.
    }
} ;