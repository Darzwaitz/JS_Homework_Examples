// solution 1
// function findMissingLetter(arr) {
//   const passedIn = arr.toString().split(",");

// // const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
//   const alphabet = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ"];

//   let firstLetAlph = alphabet[alphabet.indexOf(passedIn[0])];
//   let secondLetAlph = alphabet[alphabet.indexOf(passedIn[passedIn.length - 1])];

//   let range = alphabet.slice(
//     alphabet.indexOf(firstLetAlph),
//     alphabet.indexOf(secondLetAlph) + 1
//   );

//   const missingLett = [];

//   range.forEach((element) => {
//     if (!passedIn.includes(element)) {
//       missingLett.push(element);
//     }
//   });

//   return missingLett.toString();
// }

// solution 2
function findMissingLetter(arr) {
  let start = arr[0].charCodeAt();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt();

    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }

    start = current;
  }

  return "";
  // console.log(start);
}

// console.log(findMissingLetter(["t", "u", "v", "w", "x", "z"]));

module.exports = findMissingLetter;
