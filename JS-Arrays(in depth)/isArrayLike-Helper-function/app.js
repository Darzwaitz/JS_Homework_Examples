// Array like collections have the Symbol.iterator property
// Objects are not iterable because they do not have the special property of Symbol.iterator
let domDiv = document.querySelectorAll('div'); // Array like

// console.log(domDiv[Symbol.iterator]);
// function values()​
// length: 0​
// name: "values"

// object not Array like
let obj = {
    1: 'one',
    2: 'two',
    3: 'three'
};

// Helper function to check if value passed in is iterable/arrayLike
// const isArrayLike = function (coll) {
//     return (coll != null && typeof coll[Symbol.iterator] === 'function');
// }

// converted to arrow function
const isArrayLike = (coll) => (coll != null && typeof coll[Symbol.iterator] === 'function');

let str = "string"; // Array like

// for (const v of obj) {
//     console.log(v);
// }

console.log(isArrayLike(str)); // true
console.log(isArrayLike(domDiv)); // true
console.log(isArrayLike(obj)); // false