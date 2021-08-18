/*
Below you will find two arrays that contain student names. Combine these two arrays together into a new array and remove any duplicates. 

To make this problem a bit more difficult, there are case differences in some of the names. To eliminate that problem map to new arrays before combining and eliminating duplicates.
*/

let studentsA = ["James", "Annika", "Cameron", "AntoniO", "Kaylie", "Gabriel", "Emily", "sarah"];

let studentsB = ["LJ", "Brianna", "David", "Antonio", "Kelsey", "Joshua", "Emily", "Sarah"];

// create array from set(delete duplicates) - convert all elements to lowercase with map
let allStudents = Array.from(new Set([...studentsA.map(val => val.toLowerCase()), ...studentsB.map(val => val.toLowerCase())]));

console.log(allStudents); // Array(13) [ "james", "annika", "cameron", "antonio", "kaylie", "gabriel", "emily", "sarah", "lj", "brianna", … ]

// convert 1st letter elements to uppercase, and add the rest of that element with slice method
let allStudentsFinal = allStudents.forEach(name => console.log(name[0].toUpperCase() + name.slice(1, name.length)));

// console.log(allStudents);
console.log(allStudentsFinal);
// James
// Annika 
// Cameron 
// Antonio 
// Kaylie 
// Gabriel 
// Emily 
// Sarah 
// Lj 
// Brianna 
// David 
// Kelsey 
// Joshua 
// undefined