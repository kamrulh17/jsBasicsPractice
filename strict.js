/* "use strict" is a directive. It tells us to run the program in strict mode. Every variable must be declared in strict mode.We also can apply strict mode in any other scopes(e.g inside function),that will only work for that specific scope.But if we use it on top of a file it will work for the whole program.It helps us to write secure code,avoiding bad syntaxes and avoid creating accidental global variables.Deleting a variable,function or object etc. is not allowed. */

"use strict" ;

x = 4 ; //produce error because x is not declared.
console.log(x) ;

obj = { // will through an error because the object is not declared
    property1: 'first' ,
    property2: 'second'
}

/* delete x ; //error
delete obj ; //error */