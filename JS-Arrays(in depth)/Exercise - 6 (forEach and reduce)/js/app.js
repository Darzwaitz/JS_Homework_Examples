//Use one of the Array methods to count the number of 0s in this list of scores.

let scores = [80, 50, 0, 100, 90, 80, 75, 0, 0, 5, 65, 93];

// using forEach
let zeroCnt = 0;
scores.forEach(function (val) {
    if (val === 0) zeroCnt++;
});
console.log(zeroCnt); // 3

// using reduce
let zeroCnt2 = scores.reduce(function (acc, val) {
    return (val === 0) ? acc + 1 : acc;
}, 0);
console.log(zeroCnt2); // 3

// using arrow function with reduce NB accumulator initialization
let zeroCnt3 = scores.reduce((acc, val) => (val === 0) ? acc + 1 : acc, 0);
console.log(zeroCnt3); // 3