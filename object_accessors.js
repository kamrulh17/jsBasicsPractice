/* getters and setters are object accessors.we can get or set an object property with these. better data quality,simpler syntax and faster */

//here when we print the object to browser console we see a method called fullname().
const personObj = {
    fname: 'Kamrul' ,
    lname: 'Hasan' ,
    age: 23 ,
    fullName: function(){
        return this.fname + this.lname ;
    }
} ;
console.log(personObj) ;
console.log(personObj.fullName()) ;

//if we print the object to browser console, we see the ''fullname' as a property in the object with computed value(i.e fullname property is created and it's value becomes 'KamrulHasan')
const personObj2 = {
    fname: 'Kamrul' ,
    lname: 'Hasan' ,
    age: 23 ,
    get fullname() { //getter accessor
        return this.fname + this.lname ;
    }
} ;
console.log(personObj2) ;
console.log(personObj2.fullname) ;  //as we used getter, the fullname acts like a property(not method), so we don't use '()'.

const personObj3 = {
    fname: 'Kamrul' ,
    lname: 'Hasan' ,
    age: 23 ,
    language: '',
    set lang(lan) { //getter accessor
        this.language = lan ;
    }
} ;

personObj3.lang = 'bengali' ;
console.log(personObj3) ;