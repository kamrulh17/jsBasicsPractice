/* for...in loop goes through the properties of an object.we also can use it for array but it is not best practice. for array we use for loop. forEach() or for...of loop.because in array the order of the element is important. In object,properties are unordered.for..of loop can be used to any iterable object like arrays,strings,sets or maps. for...in returns the index number(for arrays or strings) or keys(for object) wheres  for of returns the values. */

const personObj = {
    fname: 'Kamrul' ,
    lname: 'Hasan' ,
    age: 23 ,
    fullName: function(){
        return this.fname + this.lname ;
    }
} ;

for(let i in personObj) {
    //i is just the key of the properties.
    console.log(i) ;
    /* console.log(personObj.i) ; will produce  undefined because there is no key as 'i' in the object.We have to access the values by another method. */
    console.log(personObj[i]) ; //as property keys are in a variable so we need not put ''.
}

let str = 'Kamrul Hasan' ;
for(let i of str) {
    // i will be the values of the string.But if we used for...in loop then i will be the index numbers.
    console.log(i) ;
}

const myArray = ['A', 'B', 'C', 'D', 'E'] ;
for(let j of myArray) {
    console.log(j) ;
}