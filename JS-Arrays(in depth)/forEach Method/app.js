'use strict';

// forEach allowz to mutate the array
// forEAch here will pass each element of the array into the anonymous function of the method
let arr = [3, 15, 25, 6, 8, 12],
    total = 0;

// for (let val of arr) {
//     total += val;
// };
// console.log(total); // 69

// arr.forEach(function (val) {
//     total += val;
// });

// console.log(total); // 69

// can pass in the value, the index and entire array
arr.forEach(function (val, idx, theArray) {
    theArray[idx] = val * val;
});
console.log(arr); // Array(6) [ 9, 225, 625, 36, 64, 144 ]

// iterate array, check score of each object, then change the pass value
let objArr = [{
    firstName: "Steven",
    lastName: "Hancock",
    score: 90,
    pass: null
}, {
    firstName: "Lynette",
    lastName: "Jorgensen",
    score: 100,
    pass: null
}, {
    firstName: "Andrew",
    lastName: "Wilson",
    score: 69,
    pass: null
}, {
    firstName: "Annika",
    lastName: "Turner",
    score: 82,
    pass: null
}];

// mutates the array
objArr.forEach(function (val) {
    (val.score < 70) ? val.pass = false : val.pass = true;
});