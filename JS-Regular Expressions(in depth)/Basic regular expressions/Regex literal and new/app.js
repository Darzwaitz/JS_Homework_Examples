// regular expressions are a way to work with patterns - you cant always be sure what the value will be when working with textual input
// Reg ex are Objects
// 2 ways to create - literal & constructor - new RegExp('Pattern)
// literal let regex = /Pattern/;
// Once you have a regex object, you can then use it with one of the methods on RegExp Constructor or the String object wrapper

let txt = "Programming courses always starts with a hello world example."


// looking for words that are within a value
let regex1 = new RegExp('hello');
let regex2 = /world/;
let regex3 = /worlds/;

// test method available on the regex object - test to see if value matchez
console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true
console.log(regex3.test(txt)); // false