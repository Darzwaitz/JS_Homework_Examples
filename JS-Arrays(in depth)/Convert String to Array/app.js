
let str = "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and object oriented--and blend them as appropriate.";

let strArray = [...str]; //array of length 200 letters, spaces etc.
let strArray2 = Array.from(str); //array of length 200 letters, spaces etc.

console.log(`strArray is array: ${Array.isArray(strArray)}`); // strArray is array: true
console.log(`strArray2 is array: ${Array.isArray(strArray2)}`); // strArray2 is array: true

let str2 = "";

for (let val of str) {
    if (val === 'j') {
        str2 += val.toUpperCase();
    } else {
        str2 += val;
    }
};
//str2 logs:  "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and obJect oriented--and blend them as appropriate."

let str3 = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
        str3 += str[i].toUpperCase();
    } else {
        str3 += str[i];
    }
}
//str3 logs:  "NATURAL LANGUAGE HAS NO DOMINANT PARADIGM, AND NEITHER DOES JAVASCRIPT. DEVELOPERS CAN SELECT FROM A GRAB BAG OF APPROACHES--PROCEDURAL, FUNCTIONAL, AND OBJECT ORIENTED--AND BLEND THEM AS APPROPRIATE."