// find can take a callback - findIndex returnz the index value of the return

let scores = ["80", 90, "55", 60, 100, 85, 95, 25, "100"];

// callback here will contain each element on iteration
let topScore = scores.find(function (val) {
    // == allows coercion - so we can check numberz and stringz here
    console.log(`${typeof val} : ${val}`);
    // string : 80 
    // number : 90 
    // string : 55 
    // number : 60 
    // number : 100
    return val == 100;
});

console.log(topScore); // 100

// ex. 2
let users = [
    { name: "Steve", q1: 45, q2: 85 },
    { name: "Ignacio", q1: 100, q2: 100 },
    { name: "Alvin", q1: 95, q2: 100 },
    { name: "Brianna", q1: 100, q2: 85 },
    { name: "Andrea", q1: 75, q2: 95 }
];

// which user scored 100 on both quizez
let both = users.find(val => val.q1 == 100 && val.q2 == 100);
// will return the object
console.log(both); // Object { name: "Ignacio", q1: 100, q2: 100 }
console.log(both.name); // Ignacio


// findIndex - same function - index number returned of object within the array
let bothFindIndex = users.findIndex(val => val.q1 == 100 && val.q2 == 100);
console.log(bothFindIndex); // 1

console.log(users[0].q1); // 45