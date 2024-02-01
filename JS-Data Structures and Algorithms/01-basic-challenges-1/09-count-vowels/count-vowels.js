// Solution 1
// function countVowels(str) {

//   const output = [];
//   const input = str.toLowerCase().split("");

//   for (i = 0; i < input.length; i++) {
//     let cur = input[i];
//     if (
//       cur === "a" ||
//       cur === "e" ||
//       cur === "i" ||
//       cur === "o" ||
//       cur === "u"
//     ) {
//       output.push(input[i]);
//     }
//   }
//   return output.length;
// }

// Solution 2
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const input = str
    .toLowerCase()
    .split("")
    .filter((el) => vowels.includes(el)).length;

  return input;
}

module.exports = countVowels;
