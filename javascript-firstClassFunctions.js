// With first class functions in JS, functions can be passed around with references
// functions are values
let sum = function(x, y) {
    return x + y;
};

let run = function(fn, a, b) {
    // console.log(typeof(fn(a, b))); typeof is number
    console.log(fn(a, b));
};

//pass in sum function
run(sum, 10, 5); // log '15'

//pass in different function - anonymous fn created on the fly
run(function(x, y) {
    return x * y;
}, 10, 5); // logs 50