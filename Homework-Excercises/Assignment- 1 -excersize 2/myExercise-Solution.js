let content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

for (let prop in pres) {
    console.log(`Property name: ${prop} - Type of property: ${typeof pres[prop]}`);
}
console.log('Objects own properties(not on the prototype)');

//has own properties
for (let prop in pres) {
    if (pres.hasOwnProperty(prop)) {
        console.log(`Property name: ${prop} - Type of property: ${typeof pres[prop]}`);
    }
}

//same result for results of properties on the object
let arr = Object.keys(pres);

for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} - ${typeof pres[arr[i]]}`);
}