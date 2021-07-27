let array1 = [5, 10, 15, 20, 25],
    array2 = [2, 4, 6, 8, 10, 12],
    array3 = ["abc", "def", "ghi", "jkl"];

// combining using spread
let newArray = [...array1, ...array2, ...array3];
console.log(newArray); // Array(15) [ 5, 10, 15, 20, 25, 2, 4, 6, 8, 10, … ]

// same using concat - returnz a new array
// order is defined by the array concat is called on
let newArray2 = array2.concat(array1, array3);
console.log(newArray2); // Array(15) [ 2, 4, 6, 8, 10, 12, 5, 10, 15, 20, … ]

// can also add array in like this:
let newArray3 = array1.concat([7, 8, 9], array3);
console.log(newArray3); // Array(12) [ 5, 10, 15, 20, 25, 7, 8, 9, "abc", "def", … ]