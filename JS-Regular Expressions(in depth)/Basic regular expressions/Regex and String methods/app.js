// RegExp Methods (3 of) Usually only first 2 used
// test: returns true if pattern is found in the passed String, false if not 
// exec: returns an array of the matche (doesnt show all matches in these examples?) - shows also index of match, and string the match was performed on
// toString: retuns a string of the regular expression syntax - Not really used 

// with methods on the regexp object we pass in the string to be evaluated
// with methods used on the string, we pass in the created regex object

// String Methods (4 of)
// match: (just like exec) returns an array of matches and the index of those
// search: returns just the index of the matched string
// replace: replaces matches with a string passed in
// split: splits a string into an array. The division is based on the regular expression pattern - can also be used with plain text passed in as arg, which would be the delimiter

let txt = "Programming courses always starts with a hello world example."
let txt2 = "Programming hello courses always starts with a hello world example."


// looking for words that are within a value
let regex1 = /hello/;
let regex2 = /world/;
let regex3 = /\s/; // denotes a space

// exec method available on the regex object
console.log(regex1.exec(txt));
// Array [ "hello" ]
// ​   0: "hello"
// ​   groups: undefined
// ​   index: 41
// ​   input: "Programming courses always starts with a hello world example."
// ​   length: 1

console.log(regex2.exec(txt));
// Array [ "world" ]
// ​   0: "world"
// ​   groups: undefined
// ​   index: 47
// ​   input: "Programming courses always starts with a hello world example."
// ​   length: 1

console.log(txt.match(regex1)); // same as exec
// Array [ "hello" ]
// ​   0: "hello"
// ​   groups: undefined
// ​   index: 41
// ​   input: "Programming courses always starts with a hello world example."
// ​   length: 1

// search returns only the index of the match
console.log(txt.search(regex1)); // 41

// String methods

// replace (returns a new string)
console.log(txt.replace(regex1, 'Hi')); // Programming courses always starts with a Hi world example.

// split
console.log(txt.split(regex1));
// Array [ "Programming courses always starts with a ", " world example." ]
// ​   0: "Programming courses always starts with a "
// ​   1: " world example."
// ​   length: 2

console.log(txt.split(regex3));
// Array(9) [ "Programming", "courses", "always", "starts", "with", "a", "hello", "world", "example." ]
// ​    0: "Programming"
//     ​1: "courses"
//     ​2: "always"
//     ​3: "starts"
//     ​4: "with"
//     ​5: "a"
//     ​6: "hello"
//     ​7: "world"
//     ​8: "example."
//     ​length: 9

console.log(txt.toString(regex3)); // Programming courses always starts with a hello world example.
