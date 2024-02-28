function sumOfEvenSquares(numbers) {
  return (
    numbers
      .filter((element) => {
        if (element % 2 === 0) {
          return element;
        }
      })
      .map((even) => even * even)
      //   .map((even) => Math.pow(even, 2))
      //   .map((even) => even ** 2)
      .reduce((result, elem) => result + elem, 0)
  );
}

// sumOfEvenSquares(numbers);
console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));

module.exports = sumOfEvenSquares;
