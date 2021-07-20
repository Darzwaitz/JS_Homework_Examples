// filter method is similar to map, in that it creates a new array
// filter creates a sub-set of the array (filtering elementz from the array)
// returning a true or false from function passed in (predicate function)
// element, index and array available as values in filter args
let scores = [80, 50, 0, 100, 90, 80, 75];

let passScores = scores.filter(function (val) {
    return val >= 70;
});

console.log(passScores); // Array(5) [ 80, 100, 90, 80, 75 ]

let failScores = scores.filter(function (val) {
    return val < 70;
});

console.log(failScores); // Array [ 50, 0 ]