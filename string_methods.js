
/* When we declare a string as an object ( new String('') ;) it acquires some extra features. Though string is a primitive value,still we can use javascript built in methods and properties in string.This methods are defined in the 'new String()' object.JS thinks a string as a 'String' object and thus we can access 'String' object's methods.String methods returns a new string,they do not modify the original string.Strings are immutable. */

const myString = 'They are so called \'VIKINGS\' from the north. Vikings are furious' ; //escape character

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
console.log(alphabets) ;
console.log('Length is ' + alphabets.length) ;

//count starts from 0
console.log('Slice method ' + alphabets.slice(5,10)) ;

//second parameter is length
console.log('Substr method ' + alphabets.substr(5,5))  ; 

/* i flag is for case insensitive. g flag is for replacing all matches. i and g flags are called js regular expressions.It is a sequence of characters that forms a search pattern. It is used to perform all kinds of text search() or replace() ,when we search without regular expression it will find the exact matches,to perform our own search pattern we use regular expression. */
console.log('Replace method: ' + myString.replace(/vikings/ig, 'Terminators')) ; 

console.log('toLowerCase method: ' + alphabets.toLocaleLowerCase()) ;

//concat() method
const string3 = myString.concat(' * ',alphabets);
console.log(string3);

//trim() method removes extra spaces from beginning and ending.
const string4 = '       this is           me          ' ;
console.log(string4) ;
console.log(string4.trim());


console.log(alphabets.charAt(0));

//split() method returns an array of strings. If we omit the separator it will contain the whole array in index 0.
const stringArray = alphabets.split() ;
console.log(stringArray) ;

//returns an array of single characters.
const stringArray2 = alphabets.split(''); 
console.log(stringArray2);
console.log(alphabets.split(',')); //split where ',' occurs.