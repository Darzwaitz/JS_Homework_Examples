function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return result;
}

// a dangerous way using eval
// function calculator(num1, num2, operator) {
//   if (
//     operator == "+" ||
//     operator == "-" ||
//     operator == "/" ||
//     operator == "*"
//   ) {
//     return eval(`${num1} ${operator} ${num2}`);
//   } else {
//     return "Invalid Operator";
//   }
// }

// console.log(calculator(2, 5, "*"));

module.exports = calculator;
