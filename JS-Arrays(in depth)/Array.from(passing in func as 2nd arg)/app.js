// passing a function to Array.from as the 2nd arg
nums = new Set([1, 2, "3", 4, "5"]); // arraylike

numsArray = Array.from(nums);
// 2 elementz are strings
console.log(numsArray); // Array(5) [ 1, 2, "3", 4, "5" ]
// pass in a function to check and convert to number
numsArray2 = Array.from(nums, function (val) {
    if (typeof val === 'string') {
        return Number(val);
    } else {
        return val;
    }
});
console.log(numsArray2); // Array(5) [ 1, 2, 3, 4, 5 ]