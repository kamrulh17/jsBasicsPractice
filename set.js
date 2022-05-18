/* The set data structure is almost like array.Main difference is that it merges out the duplicate elements. We can use methods and properties of set */

const newSet = new Set([3,4,1,3,9,2,1,8]) ; //create set by passing an array to 'new Set()' constructor. it doesn't have literal syntax.
console.log(newSet) ;

newSet.add(10) ;
console.log(newSet) ; //adds an element to the set

newSet.delete(3) ;
console.log(newSet) ; //deletes an element from the set

/* forEach() method invokes a callback function for each of the element from the set. */
/* has() method returns true if an element exists in the set */
/* values() method returns an iterator of the set, so we can loop through those elements and also use for...of */
/* size property gives us the length of the set */

for(i of newSet.values()) {
    console.log(i) ; // returns the elements of the set.
}