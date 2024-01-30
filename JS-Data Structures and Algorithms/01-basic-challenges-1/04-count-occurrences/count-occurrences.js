function countOccurrences(str, char) {
  let result = 0;
  [...str].forEach((element) => {
    if (element == char) {
      result++;
    }
  });
  return result;
}
// console.log(countOccurrences("hello world", "l")); // 3

module.exports = countOccurrences;
