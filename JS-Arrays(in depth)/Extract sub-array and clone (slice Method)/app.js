// extract a portion of an array and return it as a new array
// slice method can also be used to clone array
// slice accepts 2 args - neither are required
// 1st arg specifies the starting element it should extract
// 2nd arg, which element it should stop at - new array will include the specified element from arg 1 up to but not including the specified element of arg 2

let array1 = [5, 10, 15, 20, 25, 30, 35, 40];

let newArray = array1.slice(0, 5);
console.log(newArray); // Array(5) [ 5, 10, 15, 20, 25 ]

let newArray2 = array1.slice(2);
console.log(newArray2); // Array(6) [ 15, 20, 25, 30, 35, 40 ]

// cloning (will be a completely new array, not reference)
let newArray3 = array1.slice();
console.log(newArray3); // Array(8) [ 5, 10, 15, 20, 25, 30, 35, 40 ]

// arguments property of functions is array-like
// convert to array
let test = function () {
    console.log(arguments);

    let argArray = Array.prototype.slice.call(arguments);
    console.log(Array.isArray(argArray)); // true
    console.log(argArray);
    // Array(3) [ 1, 2, 3 ]
    //     ​0: 1
    //     ​1: 2
    //     ​2: 3
    //     ​length: 3
};

test(1, 2, 3);