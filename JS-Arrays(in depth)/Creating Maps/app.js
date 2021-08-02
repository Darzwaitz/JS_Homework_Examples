let i = { x: 10 },
    j = { y: 20 },
    obj2 = {};

obj2[i] = 100;
obj2[j] = 5;


let map = new Map();

map.set(i, 100);
map.set(j, 5);

console.log(map);
// Map { {…} → 100, {…} → 5 }
// ​size: 2
// ​<entries>
// ​​0: Object { x: 10 } → 100
// ​​1: Object { y: 20 } → 5

console.log(map.get(i)); // 100
console.log(map.size); // 2

// convert map to array
let arr = [...map];
console.log(arr); // array of arrays
// Array [ (2) […], (2) […] ]
    // 0: Array [ {…}, 100 ]
    // 1: Array [ {…}, 5 ]
    // length: 2