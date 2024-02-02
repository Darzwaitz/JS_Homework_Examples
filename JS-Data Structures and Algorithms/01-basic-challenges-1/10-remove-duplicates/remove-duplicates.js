// Solution 1
// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

// Solution 2
function removeDuplicates(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (!output.includes(cur)) {
      output.push(cur);
    }
  }
  return output;
}

// console.log(
//   removeDuplicates([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, "hello", "hello", true, true])
// );

module.exports = removeDuplicates;
