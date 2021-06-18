//this is useful for a function that will have a varied or unknown number of args
// nums variable/array created implicitly when passed into the functions arguments
let sumIt = function (...nums) {
    //let nums = [...arguments];
    console.log(Array.isArray(nums)); // true
    console.log(nums); // Array(6) [ 2, 3, 4, 5, 6, 7 ]
};

sumIt(2, 3, 4, 5, 6, 7);