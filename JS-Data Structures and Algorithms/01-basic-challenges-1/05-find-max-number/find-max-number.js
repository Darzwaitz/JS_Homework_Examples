function findMaxNumber(arr) {
  // check to make sure array is passed
  if (arr instanceof Array) {
    let curEl = 0;
    arr.forEach((element) => {
      if (element > curEl) {
        curEl = element;
      }
    });
    return curEl;
  } else {
    return "Not a valid input";
  }
}
// console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(findMaxNumber([]));

// easy way
// const ans = function findMaxNumber(arr) {
//   return Math.max(...arr);
// };
// console.log(ans([1, 7, 9, 12]));

module.exports = findMaxNumber;
