// // solution 1
function displayLikes(names) {
  const length = names.length;

  if (length === 0) return "no one likes this";
  if (length === 1) return `${names[0]} likes this`;
  if (length === 2) return `${names[0]} and ${names[1]} like this`;
  if (length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (length > 3)
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
}

// // solution 2
// function displayLikes(names) {
//   const length = names.length;

//   switch (true) {
//     case length === 0:
//       return "no one likes this";
//       break;
//     case length === 1:
//       return `${names[0]} likes this`;
//       break;
//     case length === 2:
//       return `${names[0]} and ${names[1]} like this`;
//       break;
//     case length === 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       break;
//     case length > 3:
//       return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
//       break;
//     default:
//       throw new Error("Input not valid");
//   }
// }

module.exports = displayLikes;
