// reduce & reduceright have the same functionality except for reduceRight iterates from the right-hand side of the args
// the purpose of reduce is to combina all the elements of an array into a single value
// takes 2 args - 1st is the accumulator and 2nd is array
// 3rd arg can be an index

let scores = [80, 50, 0, 100, 90, 80, 75];

// 0 here will be passed in first as the accumulator, then 80 is added, and 80 becomes the accumulator 50 the val and so on
let sum = scores.reduce(function (acc, val) {
    return acc + val;
}, 0);
console.log(sum); // 475

let objs = [{ firstName: "Steven" }, { lastName: "Hancock" }, { score: 85 }];
// empty object added here as accumulator
let obj = objs.reduce(function (acc, val) {
    // static method, combines the values
    return Object.assign(acc, val);
}, {});

console.log(obj); // Object { firstName: "Steven", lastName: "Hancock", score: 85 }