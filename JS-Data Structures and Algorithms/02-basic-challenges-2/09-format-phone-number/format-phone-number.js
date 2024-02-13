function formatPhoneNumber(numbers) {
  numbers = numbers.join("");
  const part1 = numbers.slice(0, 3);
  const part2 = numbers.slice(3, 6);
  const part3 = numbers.slice(6, numbers.length);
  return `(${part1}) ${part2}-${part3}`;
}

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

module.exports = formatPhoneNumber;
