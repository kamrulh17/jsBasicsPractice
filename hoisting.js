/* Default behavior of moving all the 'declarations' to the top. Javascript go through the full program and finds all the declarations and move them to the top. It just moves the declaration part(var x,let y etc.),not the definition(x = 2 or y = 4 etc.) part.Variables declared with var is hoisted to the top as well as assigned undefined to them(it takes space in memory). But when declared with let or const it moves the declaration part but do not assign 'undefined' (so it has no space in memory and we cannot assign a value later). So variables declared with var can be used before declaration but let and const can't be used before declaration(though they are hoisted). All the rules of hoisting is applicable for other scopes as well like global,function or block scope.In strict mode we must declare before using a variable */

// x is undefined because the value is hoisted to the top and initialized with undefined.
console.log(x) ; 
var x ;
x = 3 ;

x1 = 4 ;
console.log(x1) ; // undefined is replaced by 4. so output is 4.
var x1 ;

y1 = 5 ; //Error: cannot access y1 before initialization,y1 is hoisted but not initialized to 'undefined' .
console.log(y1) ;
let y1 ;

/*only the 'let y' part moves to the top but it is not initialized then. so it will produce error. */
console.log(y) ; //produce error.Error: cannot access y before initialization
let y = 6 ;