// // solution 1
// function findMissingNumber(arr) {
//   const numItems = 10;
//   const arrFull = [];

//   //   create full array to be compared
//   for (let i = 1; i < numItems + 1; i++) {
//     arrFull.push(i);
//   }
//   // loop full array, return element not found in passed in array
//   for (let i = 0; i < arrFull.length; i++) {
//     if (!arr.includes(arrFull[i])) return arrFull[i];
//   }
// }

// // // solution 2
// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;

//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }

//   return expectedSum - actualSum;
// }

// // solution 3 - using reduce
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// // const result = findMissingNumber();
// const results = findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]);

// console.log(results);

module.exports = findMissingNumber;
