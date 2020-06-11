// Callback/Closure example
// let funct = function funct() {
//     let a = 2,
//         b = 3;

//     let funct2 = function funct2() {
//         console.log(a + b);
//     };

//     setTimeout(funct2, 1000);
// };

// funct();


//A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. 
//Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of 
//global variables which can cause problems when combining code.
// function returned as part of object literal - scope remains outside of the module scope
let APP = (function module() {
    let a = 3;

    let printIt = function printIt(val) {
        console.log(val);
    };

    let sumIt = function sumIt(b) {
        printIt(a + b);
    };

    let multiplyIt = function multiplyIt(b) {
        printIt(a * b);
    };

    return {
        sumIt: sumIt,
        multiplyIt: multiplyIt
    }

}());

// (function runThat() {
//     console.log(APP.multiplyIt(4));

// }());

(function runThat() {
    console.log(APP.sumIt(3));

}());