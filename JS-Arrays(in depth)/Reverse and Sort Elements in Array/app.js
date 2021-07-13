// reverse method mutates the array
let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
let arr3 = ["Steven", "Mary", "Simone", "ari", "McKay", "James"]; // lowercase 'a' here


// console.log(arr.reverse()); // [ "James", "McKay", "Ari", "Simone", "Mary", "Steven" ]

let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];
console.log(arr2.sort());
// sort() iz a higher order function - we can pass in a callback

// sort() will know what to do if the value returned from this callback iz greater than zero, less than zero, or zero
// 3 way of doing this here
let compareNum = function (a, b) {
    // if (a < b) {
    //     return -1;
    // } else if (b < a) {
    //     return 1;
    // } else {
    //     return 0;
    // }

    // // if a iz less than b, return -1, otherwize compare b less than a - if thats true return 1, else 0
    // return (a < b) ? -1 : (b < a) ? 1 : 0;

    // easiest way
    return a - b;
};

let compareString = function (a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
// sorts the array properly, and keeps the original formatting with the lowercase 'a' here
console.log(arr3.sort(compareString)); // Array(6) [ "ari", "James", "Mary", "McKay", "Simone", "Steven" ]

// can also use anonymous function ( same output ) - more commonly done this way
console.log(arr3.sort(function (a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
));

arr.sort();
console.log(arr2.sort(compareNum)); // Array(8) [ -25, -10, 0, 15, 43, 112, 323, 500 ]