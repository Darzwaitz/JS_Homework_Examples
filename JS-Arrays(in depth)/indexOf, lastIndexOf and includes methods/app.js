// indexOf, lastIndexOf & includes methods

let students = ["Steven", "Lynette", "Kaylie", "LJ", "Joshua", "Sarah", "Emily"],
    scores = [80, 90, 55, 60, 85, 95, 25, 100];

// get index position of specified value - iterate from the right
let numLoc = scores.indexOf(25);
console.log(numLoc); // 6

// get index position of specified value - iterate from the left
let numLoc2 = scores.lastIndexOf(25);
console.log(numLoc2); // 6

// if element doesnt exist, -1 returned
let numLoc3 = scores.lastIndexOf(12);
console.log(numLoc3); // -1

// for a string
let strLoc = students.indexOf('LJ');
console.log(strLoc); // 3

// if itz greater than -1, itz there
if (scores.indexOf(100) > -1) {
    console.log('this array containz 100'); // this array containz 100
}

// INCLUDES method
// if itz greater than -1, itz there - with includes, it returns a boolean
if (scores.includes(100)) {
    console.log('this array containz 100'); // this array containz 100
}