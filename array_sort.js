/* sort() method sorts the elements of an array alphabetically, by default it sorts as string. */


const carArray = ['BMW', 'Mercedes', 'Audi', 'Lamborghini', 'Porsche'] ;
console.log(carArray.sort()) ;

const numberArray = [10, 25, 30, 9, 77, 13, 50, 100] ;
console.log(numberArray.sort()) ;

/* here we introduce a 'sort function' inside sort method, it goes through all the combination of array elements, if it returns negative(i.e. false) then a is sorted before b. If it returns positive then a is sorted after b. If it returns 0 then they remains as it is.We can find the mas or min value of an array after sorting.But it is not efficient.  */


// const numberArray = [10, 25, 30, 9, 77, 13, 50, 100] ;
//sorts ascending order
numberArray.sort(function (a, b) {
    return a-b ;
}) ;
// sort method performs the operation on the original array, it sorts the original array.
console.log(numberArray) ;

//sorts descending order
numberArray.sort(function (a, b) {
    return b-a ;
}) ;
console.log(numberArray) ;

// sorting in random order
numberArray.sort(function (a, b) {
    return 0.5 - Math.random() ; //generates random number between 0(inclusive) and 1(exclusive) 
}) ;
console.log(numberArray) ;
//the above method id not accurate, most popular method is 'Fisher Yates' shuffle.

// arrays can also contain objects. we also can sort objects.
const objArray = [
    {name: 'BMW', model: 2017},
    {name: 'Mercedes', model: 2015},
    {name: 'Toyota', model: 2020},
    {name: 'Audi', model: 2010},
    {name: 'BMW', model: 2020}
] ;

// here a and b are the elements of the array(i.e an object).
// sorts numerically
objArray.sort(function(a, b) {
    return a.model - b.model ;
});
console.log(objArray) ;

//sorts alphabetically
objArray.sort(function(a, b) {
    let x = a.name.toLowerCase() ;
    let y = b.name.toLowerCase() ;
    if(x<y){
        return -1 ;
    }
    if(x>y){
        return 1 ;
    }
});
console.log(objArray) ;