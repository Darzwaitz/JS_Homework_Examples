/* Not much used, though this will copy elements within an array - mutates the array
   The first arg specifies the array position to which the element or elementz are copied
   The 2nd arg indicates the index of the element to start copying - including that index
   The 3rd arg indicates the element/index to stop copying - does not include that index
   - The 3rd arg is optional - if left off, will go to the end of the array
   The length of the array is not changed
   If any arg is negative, it will go to the end of the array, and count backwards as many as that negative number specified */

let arr = [1, 2, 3, 4, 5, 6];

// arr.copyWithin(2, 0, 2);
// console.log(arr); // Array(6) [ 1, 2, 1, 2, 5, 6 ]

// arr.copyWithin(1, 2, 3);
// console.log(arr); // Array(6) [ 1, 3, 3, 4, 5, 6 ]

// arr.copyWithin(2, 0);
// console.log(arr); // Array(6) [ 1, 2, 1, 2, 3, 4 ]

// // 1st arg ( COPIED TO THIS INDEX) 2nd arg ( FROM THIS INDEX)
// arr.copyWithin(3, -1);
// console.log(arr); // Array(6) [ 1, 2, 3, 6, 5, 6 ]

// only one value copied here, as 3rd arg is longer than the array
arr.copyWithin(0, 5, 6);
console.log(arr); // Array(6) [ 6, 2, 3, 4, 5, 6 ]