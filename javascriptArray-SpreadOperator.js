// different ways of combining arrays and using the spread operator

let scores1 = [2, 4, 6, 8],
    scores2 = [20, 40, 60, 80],
    scores3 = [22, 44, 68, 88];

//let newArray = scores1.concat(scores2, scores3);

//let newArray = [].concat(scores1, scores2, scores3);

//let newArray = [scores1, scores2, scores3];

let newArray = [];
newArray.push(55, 70, 90);

// arrays pushed this way will be added as arrays
//newArray.push(scores1, scores2, scores3);

// arrays pushed this way will be added as individual array items - *in sequence of being added
newArray.push(...scores1, ...scores2, ...scores3);

console.log(newArray);