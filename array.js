/* Array elements can also be arrays, functions or objects, in fact array elements can be of any data type. array also has some methods defined in 'new Array' object. we can use those in array methods. arrays are special kind of object with numbered index. */

const cars = ['BMW', 'Mercedes', 'Audi', 'Lamborghini', 'Porsche'] ;
console.log(cars) ;
//accessing last element
console.log('Last element is: ',cars[cars.length-1]) ;

/*forEach() method takes a function as parameter. It goes through every element of the array and calls the function for each element.*/

cars.forEach(eachFunction) ;
function eachFunction(value) {
    console.log(value) ;
}

/* toString() method returns an string of the array elements separated by comma.If we want our won separator we use join() method */
console.log(cars.toString()) ;
console.log(cars.join('*'));

/* splice(n1,n2,element1,element2,...) method defines how many elements n1 defines where the elements should be added, n2 defines how many elements should be removed. Technically we can use this method to remove elements from an array without any whole. It changes to the original array. */
cars.splice(2, 0, 'Mustang', 'Aston Martin', 'Rolls Royce') ;
console.log(cars) ;
// remove element
cars.splice(2,1) ;
console.log(cars) ;

/* concat() method merges two arrays into a new array.It does not change the original arrays. */

/* slice() method returns a new array. */
const newCars = cars.slice(1,3) ;
console.log(cars) ;
console.log(newCars) ;






// associated array: array indexes can be named index also. in that case it will act like an object, and some array methods may not work.
/* const personArray = [] ;
personArray['name'] = 'Kamrul' ;
personArray['age'] = 23 ;
personArray['study'] = 'math' ;
console.log(personArray) ;
console.log('First element is: ',personArray['name']) ; */
// console.log(Array.isArray(personArray)) ;

//we cannot use length property here
// console.log(personArray.length) ;