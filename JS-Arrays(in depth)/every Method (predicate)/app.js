// every method is a predicate function - it returns a true or false end result
let scores = [80, 50, 0, 100, 90, 80, 75];

// 1st arg contains val from the array - can also take the index and original array as params
let result = scores.every(function (val) {
    return val > 0;
});
console.log(result); // false (because therez a zero in the array)