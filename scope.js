/* Global scope,function scope and block scope(ES6). variables declared inside a function are local variables.Local variables are only recognized inside that function, it does not matter whether it is declared using var,let or const.var,let or const are similar inside a function. But on any other block (e.g if-else block), variables declared with var is always global variables.variables declared with let and const are always block scope.If we use a variable without declaring(if we dont use var,let or const)it is automatically global variable.We should avoid global variables unintentionally, because if the variable is changed during the program then it will be changed everywhere. In javascript local variables are deleted when the function is completed. In web browser, global variables is deleted when the window(or tab) is closed.Function arguments are like local variables. */  

var x = 10 ;
function myFunction() {
    auto = 100 ;
    var x = 20 ;
    console.log(x) ;
}
myFunction() ; //x is 20
console.log(x) ;//x is 10 

/* if we used var when declaring the variable auto, then we couldn't access it here. */
console.log(auto) ;//auto is 100

{
    var y = 20 ;
    let z = 30 ;
}

//z is not recognized here.
//y is 20 here.

