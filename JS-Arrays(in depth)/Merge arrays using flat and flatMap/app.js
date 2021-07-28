// flatten an array (.flat does not mutate  returnz new array)
let array1 = [[5, 10], [15, 20], [25, 30, 35, 40]];

console.log(array1[0][0]); // 5

newArray = array1.flat();
console.log(newArray); // Array(8) [ 5, 10, 15, 20, 25, 30, 35, 40 ]

let strArray = ["The best part of a sunset", "is the muted color that appears", "in anticipation", "of", "the deep reds, oranges and golds that will hopefully come later."];

// .split returnz array of arrayz here, and .flat merges all arrays into one
let strArraySplit = strArray.map(val => val.split(' ')).flat();
console.log(strArraySplit); // Array(26) [ "The", "best", "part", "of", "a", "sunset", "is", "the", "muted", "color", … ]

// using flatMap for the same outcome
let strArraySplit2 = strArray.flatMap(val => val.split(' '));
console.log(strArraySplit2); // Array(26) [ "The", "best", "part", "of", "a", "sunset", "is", "the", "muted", "color", … ]

// toString
let strArraySplit3 = strArray.flatMap(val => val.split(',')).toString();
console.log(strArraySplit3); // The best part of a sunset,is the muted color that appears,in anticipation,of,the deep reds, oranges and golds that will hopefully come later.