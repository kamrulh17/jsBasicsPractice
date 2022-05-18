//it is a concept of nested function.
/* Global variables live until the page is discarded, like when you navigate to another page or close the window.
Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

*/ 

/* Suppose you want to use a variable for counting something, and you want this counter to be available to all functions. */

console.log('First case: ') ;

let counter = 0 ;
function add(){
    console.log(++counter) ;
}
add();
add();
add();
//there is a problem with the solution.we wanted a function, by calling it we can increase the counter. but in the example above the value of counter can be changes without calling the function, as it is a global variable. so what can we do?we can declare the counter variable inside the function.but in that case everything we invoke 'add()', the value of counter will be initialized by 0, and the function will return 1 always.

console.log('Second case: ') ;

function add2(){
    let counter2 = 0 ;
    console.log(++counter2) ;
}
add2(); // returns 1 
add2(); // returns 1
add2(); // returns 1

//what can we do now ?

//amra jodi konovabe add functin er vitor arekta function nei, and add function ke call na kore vitorer function taake call kori taile counter ta bar bar 0 hobena. that meas counter ta sudhu ekbar call hobe.

console.log('Third case: ') ;
function add3(){
    let counter3 = 0 ;
    function plus(){
        console.log(++counter3) ;
    }
}
// add3(); //ekhane kichu return hobena cause plus() function ta ekhono invoke hoyni.
// plus() ; // Will return Error, cause plus() function ta global scope e nai. so plus funtion taake add function er vitor call korte hobe.


function add4(){
    let counter4 = 0 ;
    function plus(){
        console.log(++counter4) ;
    }
    plus() ;
}
add4() ; //returns 1
add4() ; //returns 1
add4() ; //returns 1



console.log('Fourth case: ') ;
function add5(){
    let counter5 = 0 ;
    return function(){ //as it directly returns a function, function name is not necessary.
        console.log(++counter5) ;
    }
}
// so add function returns a function, so can store that function into a variable, and call that variable.
const finalAdd = add5() ;
finalAdd() ;//1
finalAdd() ;//2
finalAdd() ;//3
finalAdd() ;//4
finalAdd() ;//5

// we know, local variables are destroyed after the function has been executed.But here, counter variable is not destroyed though the add() function is called.Javascript can understand this, if javascript sees a function is returned from a function, then it destroys those variables which are not used in the returned function.If a variable is used in the returned function then that variable will not be destroyed(as we used counter variable in the returning function, so counter variable won't be destroyed here.)

//thus we solved the problem.