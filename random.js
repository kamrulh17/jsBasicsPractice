/* Math.random() returns a random integer from 0(inclusive) to 1(exclusive). Math.random() can be used with Math.floor() to return integer numbers. */

console.log(Math.random()) ;
console.log('Random int between 0 to 9: ',Math.floor(Math.random() * 10)) ; // we won't get 10 from here.

// to get 10, we use this
console.log('Random int between 0 to 10: ', Math.floor(Math.random() * 11)) ;

console.log('Random int between 1 to 10: ', Math.floor(Math.random() * 10) + 1) ;

//returns a random number between max and min value(both inclusive) ;
function minMax (min,max) {
    console.log(`Random int between ${min} and ${max}: `, Math.floor(Math.random() * (max - min + 1)) + min) ;
}
minMax(20,40) ;