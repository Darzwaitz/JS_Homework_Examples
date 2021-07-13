/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

let phoneNums2 = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

let regEx = /801-/;
// filter takes a function as arg
let newArray = phoneNums.filter(elem => regEx.test(elem));
console.log(newArray);
// Array(5) [ "801-766-9754", "801-545-5454", "801-796-8010", "801-009-0909", "801-777-6655" ]
// ​   0: "801-766-9754"
// ​   1: "801-545-5454"
// ​   2: "801-796-8010"
// ​   3: "801-009-0909"
// ​   4: "801-777-6655"
// ​   length: 5

// Using a loop
let newArray2 = [];
for (let i = 0; i < phoneNums2.length; i++) {
    if (regEx.test(phoneNums2[i])) {
        newArray2.push(phoneNums2[i]);
    }
}
console.log(newArray2);
// Array(5) [ "801-766-9754", "801-545-5454", "801-796-8010", "801-009-0909", "801-777-6655" ]
// ​   0: "801-766-9754"
// ​   1: "801-545-5454"
// ​   2: "801-796-8010"
// ​   3: "801-009-0909"
// ​   4: "801-777-6655"
// ​   length: 5