// a short example of refactoring with abstraction

// let findIt = function() {
//     let start = 1,
//         end = 100,
//         multiple = 3,
//         total = 0;

//     while (start <= end) {
//         if (start % multiple === 0) {
//             total += start;
//         }
//         start++;
//     }
//     console.log('The sum of all numbers divisible by 3 from 1 to 100 is: ' + total);
// };

// findIt();

//return the numbers in an array, to be easily iterable
let sum = function(arr) {
    let total = 0;

    while (arr.length > 0) {
        total += arr.pop();
    }

    return total;
};

let findMultiple = function(start, end, multiple) {
    let results = [];

    while (start <= end) {
        if (start % multiple === 0) {
            results.push(start);
        }
        start++;
    }

    return results;
};

//The sum of all numbers divisible by 3 from 1 to 100 is: 1683
console.log('The sum of all numbers divisible by 3 from 1 to 100 is: ' + sum(findMultiple(1, 100, 3)));

//The sum of all numbers divisible by 5 from 1 to 100 is: 1050
console.log('The sum of all numbers divisible by 5 from 1 to 100 is: ' + sum(findMultiple(1, 100, 5)));