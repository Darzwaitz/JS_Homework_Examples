
let arr = [{
    firstName: "Steven",
    lastName: "Hancock",
    score: 90
}, {
    firstName: "Lynette",
    lastName: "Jorgensen",
    score: 100
}, {
    firstName: "Andrew",
    lastName: "Wilson",
    score: 71
}, {
    firstName: "Annika",
    lastName: "Turner",
    score: 82
}];

// Ex 1
// arr.sort(function (a, b) {
//     if (a.firstName < b.firstName) return -1;
//     if (b.firstName < a.firstName) return 1;
//     return 0;
// });
// console.log(arr);
// Array(4) [ {…}, {…}, {…}, {…} ]
// ​   0: Object { firstName: "Andrew", lastName: "Wilson", score: 71 }
// ​   1: Object { firstName: "Annika", lastName: "Turner", score: 82 }
// ​   2: Object { firstName: "Lynette", lastName: "Jorgensen", score: 100 }
// ​   3: Object { firstName: "Steven", lastName: "Hancock", score: 90 }
// ​   length: 4

// Ex 2
arr.sort(function (a, b) {
    return a.score - b.score;
})
console.log(arr);
// Array(4) [ {…}, {…}, {…}, {…} ]
// ​   0: Object { firstName: "Andrew", lastName: "Wilson", score: 71 }
// ​   1: Object { firstName: "Annika", lastName: "Turner", score: 82 }
// ​   2: Object { firstName: "Lynette", lastName: "Jorgensen", score: 100 }
// ​   3: Object { firstName: "Steven", lastName: "Hancock", score: 90 }
// ​   length: 4