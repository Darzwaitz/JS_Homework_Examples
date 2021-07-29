/*
Create a function that can be used to check for and return a user object from the objs array. The function will accept an ID. It will then use the some method to first check and see if the ID exists in the array. If it exists, return the associated object. If it doesn't exist, return false.
*/

let objs = [
    { id: "LI_34", name: "Steven", q1: 85, q2: 0 },
    { id: "WL_100", name: "Mary", q1: 95, q2: 100 },
    { id: "LI_25", name: "Lynette", q1: 45, q2: 50 },
    { id: "LI_290", name: "Emily", q1: 65, q2: 30 },
    { id: "WL_97", name: "Sarah", q1: 35, q2: 80 }
];

// check to see if user existz and return it
const getUser = function (id) {
    // correct case sensitivity
    id = id.toUpperCase();
    // use some to find if it existz
    if (objs.some(val => val.id.toUpperCase() == id)) {
        return objs.find(elem => elem.id.toUpperCase() == id)
    } else {
        return false;
    }
};

console.log(getUser('WL_100')); // Object { id: "WL_100", name: "Mary", q1: 95, q2: 100 }
console.log(getUser('wl_100')); // Object { id: "WL_100", name: "Mary", q1: 95, q2: 100 }
// non-existing id
console.log(getUser('WL100')); // false