let arr = [1, 2, 3];

let obj = {
    1: 'one',
    2: 'two',
    3: 'three'
};
//the for of loop won't iterate over an object
// for (let val of obj) {
//     console.log(val);
// };

//Map can be iterated with the for of loop
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

for (let val of map) {
    console.log(val);
}
//Map aint an array - it won't have pop, push methods etc.
//Map has foreach etc.

//static method to check 
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(map)); //false

let divs = document.querySelectorAll('div');

for (let val of divs) {
    console.log(val);
}
/*
<div class="title2"></div>
<div class="line"></div>
<div id="jslogo"></div> */