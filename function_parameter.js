/* JS does not perform any checking on data type of parameters, that's why we can use any values(numbers,array,strings..etc) as parameter.JS doesn't perform any type checking of arguments or how many arguments received.Arguments are passed by value, if we change any arguments inside the function, it won't change the parameter's original value.Changes to arguments are not visible outside the function.But objects are passed by reference, if we change a property of the object it will change the original object and also be visible outside the function. */

function myFunction(a, b) {
    console.log(a * b) ;
}
myFunction(3) ; //then the value of b is set to undefined.So output is NaN.

// to solve this problem we use default parameter value, the argument value will overwrite it.If the argument is missing then the default value will be used.

function myFunction2(a, b = 5) {
    console.log(a * b) ;
}
myFunction2(3) ; //return 15.

//if we send more arguments than number of parameters, then first few arguments will be received by the parameters others will be ignored.
function myFunction3(a, b) {
    console.log(a * b) ;
    console.log(arguments) ; //returns an array.
}
myFunction3(3,5,10,20) ; // returns 15


console.log('arguments are: ')
function myFunction3(a, b) {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]) ; //returns 3,5,10,20
    }

}
myFunction3(3,5,10,20) ;


//passed by value
function myFunction4(a, b) {
    a = a + 10 ;
    b = b * 5 ;
    console.log(a,b) ;
}
let x = 10 ;
let y = 5 ;
myFunction4(x,y) ; // returns 20 and 25 
console.log(x,y) ; // returns 10 and 5 


//passed by reference
function myFunction5(a) {
    a.name = 'newName Assigned' ;
    console.log(a) ;
}
let x1 = {
    name: 'kamrul',
    age: 23
} ;
myFunction5(x1) ; // returns { name: 'newName Assigned', age: 23 }
console.log(x1) ; // returns { name: 'newName Assigned', age: 23 }


