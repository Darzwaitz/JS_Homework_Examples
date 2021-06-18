
let obj = {
    q1: 55,
    q2: 85,
    q3: 90,
    q4: 0
};

// Object.keys returns keys of object as an array
console.log(Object.keys(obj)); // Array(4) [ "q1", "q2", "q3", "q4" ]

// Object.values returns values of object as an array
console.log(Object.values(obj)); // Array(4) [ 55, 85, 90, 0 ]

// Object.entries returns array of arrays, keys & values of object
console.log(Object.entries(obj)); // 
// Array(4) [ (2) […], (2) […], (2) […], (2) […] ]
// ​
// 0: Array [ "q1", 55 ]
// ​
// 1: Array [ "q2", 85 ]
// ​
// 2: Array [ "q3", 90 ]
// ​
// 3: Array [ "q4", 0 ]
// ​
// length: 4