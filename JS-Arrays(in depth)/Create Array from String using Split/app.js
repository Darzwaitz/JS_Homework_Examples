let str = "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and object oriented--and blend them as appropriate.";

let wordArray = str.split(" "); // Array(27) [ "Natural", "language", "has", "no", "dominant", "paradigm,", "and", "neither", "does", "JavaScript.", … ]

//split method takes a 2nd parameter of the desired length of the split from the beginning
let wordArray2 = str.split(" ", 10); // Array(10) [ "Natural", "language", "has", "no", "dominant", "paradigm,", "and", "neither", "does", "JavaScript." ]

let commaArray = str.split(","); // Array(4) [ "Natural language has no dominant paradigm", " and neither does JavaScript. Developers can select from a grab bag of approaches--procedural", " functional", " and object oriented--and blend them as appropriate." ]

let hyphenArray = str.split("-"); // Array(5) [ "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches", "", "procedural, functional, and object oriented", "", "and blend them as appropriate." ]
// Array(5) [ "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches", "", "procedural, functional, and object oriented", "", "and blend them as appropriate." ]
// ​
// 0: "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches"
// ​
// 1: ""
// ​
// 2: "procedural, functional, and object oriented"
// ​
// 3: ""
// ​
// 4: "and blend them as appropriate."
// ​
// length: 5
////splits on the hyphens, so in between the hyphens, there iz nothing, so creates an empty array

//regex
let regexArray = str.split(/[,.]|--/);
// Array(8) [ "Natural language has no dominant paradigm", " and neither does JavaScript", " Developers can select from a grab bag of approaches", "procedural", " functional", " and object oriented", "and blend them as appropriate", "" ]
// ​
// 0: "Natural language has no dominant paradigm"
// ​
// 1: " and neither does JavaScript"
// ​
// 2: " Developers can select from a grab bag of approaches"
// ​
// 3: "procedural"
// ​
// 4: " functional"
// ​
// 5: " and object oriented"
// ​
// 6: "and blend them as appropriate"
// ​
// 7: ""
// ​
// length: 8
///last element is empty as it splits on the period '.'