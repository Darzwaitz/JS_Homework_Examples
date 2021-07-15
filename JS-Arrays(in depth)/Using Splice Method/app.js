/* Array.splice mutates the array it's called on 
   The first arg specifies the array position for insertion or deletion
   The second arg indicates the number of elements to delete
   The deleted elements are returned as an array
   - second arg is optional - if not included it will copy/delete to the end of the array
   */

let arr = [1, 2, 3, 4, 5, 6];

// REMOVING 
// let returnArray1 = arr.splice(2, 2);
// console.log(returnArray1); // Array [ 3, 4 ]

// let returnArray2 = arr.splice(4);
// console.log(returnArray2); // Array [ 5, 6 ]
// console.log(arr); // Array(4) [ 1, 2, 3, 4 ]

// ADDING
// NB. new values added before the specified position
// arr.splice(2, 0, "a", "b");
// console.log(arr); // Array(8) [ 1, 2, "a", "b", 3, 4, 5, 6 ]

// removes the 3 here, adds the letters, and the removed value is within the new array created
let returnArray3 = arr.splice(2, 1, 'a', 'b');
console.log(arr); // Array(7) [ 1, 2, "a", "b", 4, 5, 6 ]
console.log(returnArray3);
//  Array [ 3 ]
//     0: 3
//     length: 1