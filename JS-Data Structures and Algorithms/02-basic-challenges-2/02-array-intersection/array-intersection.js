// solution 1
function arrayIntersection(arr1, arr2) {
  let outputArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let curIndex = arr1[i];
    if (arr2.includes(curIndex)) outputArr.push(curIndex);
  }
  return outputArr;
}

// solution 2
// function arrayIntersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const outputArr = [];

//   for (const num of arr2) {
//     if (set1.has(num)) {
//       outputArr.push(num);
//     }
//   }

//   return outputArr;
// }

// console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]));

module.exports = arrayIntersection;
