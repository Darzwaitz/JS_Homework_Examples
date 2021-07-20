// map creates a new array of an existing array
// the function needs to return a value, as the method takes that value and adds it to the new array itz building
// createz a new array, so won't mutate the original

let arr = [3, 15, 25, 6, 8, 12];

let newArray = arr.map(function (val) {
    return val * val;
});

console.log(arr); // Array(6) [ 3, 15, 25, 6, 8, 12 ]
console.log(newArray); // Array(6) [ 9, 225, 625, 36, 64, 144 ]

let newArray2 = arr.map(function (val, idx, theArray) {
    console.log(val);
    console.log(idx);
    console.log(theArray);
});

// 3 
// 0 
//  Array(6)[3, 15, 25, 6, 8, 12]
// 15 
// 1 
//  Array(6)[3, 15, 25, 6, 8, 12]
// 25 
// 2 
//  Array(6)[3, 15, 25, 6, 8, 12]
// 6 
// 3 
//  Array(6)[3, 15, 25, 6, 8, 12]
// 8 
// 4 
//  Array(6)[3, 15, 25, 6, 8, 12]
// 12 
// 5 
//  Array(6)[3, 15, 25, 6, 8, 12]