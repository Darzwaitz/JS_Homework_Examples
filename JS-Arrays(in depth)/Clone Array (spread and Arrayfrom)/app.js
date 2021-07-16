'use strict';
// an array needs to be cloned as opposed to mistakenly creating a new reference to the original
// that is to say, not to mutate the original
let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];

// using spread
let clonedArr = [...arr]; // Array(6) [ "Steven", "Mary", "Simone", "Ari", "McKay", "James" ]
console.log(clonedArr);

// using Array.from
let arrAgain = Array.from(arr);
arrAgain.reverse();
console.log(arrAgain); // [ "James", "McKay", "Ari", "Simone", "Mary", "Steven" ]
console.log(arr); // // ORIGINAL ARRAY - Array(6) [ "Steven", "Mary", "Simone", "Ari", "McKay", "James" ]

// destructured
let [firstEl, secondEl, ...theRest] = [...arr];
console.log(firstEl, secondEl, theRest); // Steven Mary Array(4) [ "Simone", "Ari", "McKay", "James" ]