//immutable means objects cannot change

"use strict";
let obj = {
    firstName: 'Darzy',
    lastName: 'Kell',
    startDate: 'July  7th 2005',
    type: 'admin'
};

let obj2 = {
    firstName: 'Kerzy',
    lastName: 'Kell',
    startDate: 'July  7th 2005',
    type: 'admin'
};

//Example 1

// Object.defineProperty(obj, 'startDate', {
//     writable: false,
// });

// obj.firstName = 'Darzypan';

//obj.startDate = 'September 11th 2001';

//the log will show startDate is not writeable  - koz itz set to false
//this doesnt throw an error - though if using strict mode it will - "use strict";

//console.log(obj);
// {
//     firstName: 'Darzypan',
//     lastName: 'Kell',
//     startDate: 'July  7th 2005',
//     type: 'admin'
//   }


//Example 2

//using static method from object - cant delete or add any properties with seal
// can change existing properties
Object.seal(obj);

//obj.newProp = true; // TypeError: Cannot add property newProp, object is not extensible

//delete obj.type; // TypeError: Cannot delete property 'type' of #<Object>

//able to still change the value properties in the object - just cant delete or add any properties with seal
obj.firstName = 'Derzy';

//console.log(obj);
// {
//     firstName: 'Derzy',
//     lastName: 'Kell',
//     startDate: 'July  7th 2005',
//     type: 'admin'
//   }

// freeze combination of writable: false and seal
Object.freeze(obj2);

//obj.newProp = true; // TypeError: Cannot add property newProp, object is not extensible

console.log(obj2);