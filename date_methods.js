/* 'new Date()' constructor is used to create date object.Different object methods can be used in date object. Months counts from 0 to 11.At least two parameters should be provided and rest of them will be set by default, otherwise if there is only one parameter then that is considered as milliseconds.Default date is 1970,Jan 01, 0:00:00.If we do not specify the time zone, js will consider the browser time zone automatically. A valid date format can be converted to milliseconds using Date.parse() method. */

const d = new Date() ;
console.log(d) ;
console.log(d.toUTCString()) ; // long format UTC is same as GMT format.
console.log(d.toISOString()) ; //YYYY-MM-DDTHH:MM:SSZ format
console.log(d.toDateString()) ; // only date
/* In browser console the format is : Thu May 05 2022 14:35:07 GMT+0600 (Bangladesh Standard Time) */

/* console.log(new Date(year, months, days, hours, minutes, seconds, milliseconds)) ; */

console.log(new Date(2017, 11, 26, 16, 47, 51, 89));
/* In browser console: Tue Dec 26 2017 16:47:51 GMT+0600 (Bangladesh Standard Time) */

console.log(new Date(10000)) ; //Here 10000 milliseconds  after the default date will printed.
console.log(new Date(-10000)) ; //it counts backward from the default date.

//If the year is in 19 century, then we use two digit just.
console.log(new Date(99,11)) ; //1999,december month.

//we can pass a string(in a specific pattern),js will convert it as date object automatically.
console.log(new Date('January 01, 2020 8:12:00')) ;
//In browser console: Wed Jan 01 2020 08:12:00 GMT+0600 (Bangladesh Standard Time)

//short date format MM/DD/YYYY
console.log(new Date('12/23/2018')) ;

//long date format MMM DD YYYY
console.log(new Date('Dec 11 2018')) ;

console.log('Converted to milliseconds using parse method: ' + Date.parse('January 01, 2020 8:12:00')) ;

// qw can use these methods to get data from a date object.
/* 
getMilliseconds() //output is 0-999
getTime() //milliseconds since 1970,Jan 01,00:00:00.
getFullYear();
getMonth(); // returns 0-11
.
.
.
getDay()
Date.now() //get the time.


*/

console.log(Date.now()) ;