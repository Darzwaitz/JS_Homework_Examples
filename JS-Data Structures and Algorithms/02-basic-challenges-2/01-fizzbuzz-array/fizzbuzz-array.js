// solution 1
function fizzBuzzArray(num) {
  let output = [];
  let loopNum = 1;

  for (let i = 0; i < num; i++) {
    let loopValue = loopNum;
    if (loopNum % 3 === 0) loopValue = "Fizz";
    if (loopNum % 5 === 0) loopValue = "Buzz";
    if (loopNum % 3 === 0 && loopNum % 5 === 0) loopValue = "FizzBuzz";

    output.push(loopValue);
    loopNum++;
  }
  return output;
}

// solution 2
// function fizzBuzzArray(num) {
//   let output = [];
//   let loopNum = 1;

//   for (let i = 0; i < num; i++) {
//     let inside =
//       loopNum % 3 === 0 ? "Fizz" : loopNum % 5 === 0 ? "Buzz" : loopNum;
//     if (loopNum % 3 === 0 && loopNum % 5 === 0) inside = "FizzBuzz";

//     output.push(inside);
//     loopNum++;
//   }
//   return output;
// }

// solution 3
// function fizzBuzzArray(num) {
//   let output = [];
//   let loopNum = 1;

//   for (let i = 0; i < num; i++) {
//     switch (loopNum) {
//       case loopNum % 3 === 0 && loopNum % 5 === 0 ? loopNum : false:
//         output.push("FizzBuzz");
//         loopNum++;
//         break;
//       case loopNum % 3 === 0 ? loopNum : false:
//         output.push("Fizz");
//         loopNum++;
//         break;
//       case loopNum % 5 === 0 ? loopNum : false:
//         output.push("Buzz");
//         loopNum++;
//         break;
//       default:
//         output.push(loopNum);
//         loopNum++;
//     }
//   }

//   return output;
// }

// console.log(fizzBuzzArray(15));

module.exports = fizzBuzzArray;
