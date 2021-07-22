//Convert this string to an array. Then create a new array that doesn't include any of the articles (a, an, the)

let stmt = "The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.";

// return the words that are NOT a, an or the
// regExp \b denotes a word boundary - ors included here also
let noArticles = stmt.split(' ').filter(function (val) {
    return !/\ba\b|\ban\b|\bthe\b/i.test(val);
});

console.log(noArticles);
// Array(22) [ "best", "part", "of", "sunset", "is", "muted", "color", "that", "appears", "in", … ]
// ​0: "best"
// ​1: "part"
// ​2: "of"
// ​3: "sunset"
// ​4: "is"
// ​5: "muted"
// ​6: "color"
// ​7: "that"
// ​8: "appears"
// ​9: "in"
// ​10: "anticipation"
// ​11: "of"
// ​12: "deep"
// ​13: "reds,"
// ​14: "oranges"
// ​15: "and"
// ​16: "golds"
// ​17: "that"
// ​18: "will"
// ​19: "hopefully"
// ​20: "come"
// ​21: "later."
// ​length: 22

// same with fat arrow
let noArticles2 = stmt.split(' ').filter(val => !/\ba\b|\ban\b|\bthe\b/i.test(val));
console.log(noArticles2); // same result as previous