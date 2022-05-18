/* Map data structure is almost like object, the main difference is when using object the data type of property keys must be a string, but in maps the keys can be any data type. Object is unordered but maps keeps the order as they are inserted.Maps has a length property but object do not */

const myMap = new Map([
    ['name', 'kamrul'],
    ['age', '23'],
    ['30', '100']
])
console.log(myMap) ;

/* set() method sets the value for a key in a map */
myMap.set('height', 5.6) ;
console.log(myMap) ;
/* get() method gets the value for a key in a map */
console.log(myMap.get('name')) ;
/* delete() method removes a map element specified by the key */
/* forEach() method invokes a callback function for each of the key-value pair of the map. */
myMap.forEach(myFunction) ;
function myFunction(key, value) {
    console.log(key,value) ;
}
/* has() method returns true if a key exists in the map */
/* entries() method returns an iterator with [key,value] from a map, so we can loop through those elements and also use for...of */
for(let i of myMap.entries()){
    console.log(i) ; //i is an array of the key-value pair
}
/* size property gives us the length of the map */
