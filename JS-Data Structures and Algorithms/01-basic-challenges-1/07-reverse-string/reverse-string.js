// // long way
// function reverseString(str) {
//   let strL = str.length - 1;
//   let nxtEl = [];

//   for (let i = 0; i < strL + 1; i++) {
//     nxtEl.push(str[strL - i]);
//   }

//   return nxtEl.join("");
// }

// short way
const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("Hello"));

module.exports = reverseString;
