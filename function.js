/* function is not an executable statement so we do not put a semicolon after it.Function 'declarations' are hoisted to the top.If we define a function as function expression, it is not hoisted.Functions are also objects in javascript, so they have methods and properties arguments.length property returns the value of arguments received when it is invoked, length property returns the value of parameters in the function. */

//function declaration(is not executed immediately).it is executed when invoked.No semicolon after function declaration.
function myFunction() {
    console.log('Hello World!') ;
}
myFunction() ;

//Functions can be stored in a variable that is a function expression.Put a semicolon after function expression.We can use the variable as like the function.The returned value is stored in a variable, if it doesn't return anything then the value is undefined.
const a = function myFunction2() {
    console.log('Hello World!') ;
} ;
a() ;

const x = function() { //this function has no name, we just stored the function in a variable.Function stored in a variable do not need a name.
    console.log('Hello World!') ;
} ;
x() ;

//it is possible because of hoisting
myFunction3(5,3) ;
function myFunction3(a, b) {
    console.log(a * b) ;
}



// We can not do this(this will create an error), because b function is a function expression so it is not hoisted.

/*

const b ; //only declaration part is hoisted.
b() ;
b = function myFunction2() {
    console.log('Hello World!') ;
} ;

*/

// b() ; will through error.
const b = function myFunction2() {
    console.log('Hello World!') ;
} ;


//IIFE(Immediately Invoked fUNCTION Expression).It does not need a name because we do not need to call it, it is immediately invoked.
(function() {
    console.log('Hello World!') ;
}) () ;