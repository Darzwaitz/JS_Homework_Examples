// join is the opposite of split - it combines elementz based on a given operator
let stmt = "The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.";

let words = stmt.split(" ");
console.log(words); // Array(26) [ "The", "best", "part", "of", "a", "sunset", "is", "the", "muted", "color", … ]

// if no operator/arg is included, join will add a comma within each join
console.log(words.join()); // The,best,part,of,a,sunset,is,the,muted,color,that,appears,in,anticipation,of,the,deep,reds,,oranges,and,golds,that,will,hopefully,come,later.

console.log(words.join(' ')); // The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.

// any character, or number of characters can be used
console.log(words.join(' t e s t '));
// The t e s t best t e s t part t e s t of t e s t a t e s t sunset t e s t is t e s t the t e s t muted t e s t color t e s t that t e s t appears t e s t in t e s t anticipation t e s t of t e s t the t e s t deep t e s t reds, t e s t oranges t e s t and t e s t golds t e s t that t e s t will t e s t hopefully t e s t come t e s t later.