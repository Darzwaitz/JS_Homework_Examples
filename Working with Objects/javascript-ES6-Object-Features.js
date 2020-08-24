//Ecmascript compatibility table should be refered to for browser support & node etc.
//object literal extensions
//object static functions - function associated with 'Object' - accessed from main 'Object'

//concise properties
//OLD
let multiple = 5;

let obj1 = {
    start: 1,
    end: 100,
    multiple: multiple
};

//the property is set with one word (multiple), as the property name & property are named the same thing
//ES6
let obj2 = {
    start: 1,
    end: 100,
    multiple
};

console.log(`Previous ES: ${obj1.multiple} - ES6: ${obj2.multiple}`); //Previous ES: 5 - ES6: 5

//concise methods
//OLD
let obj3 = {
    firstName: 'Darzy',
    lastName: 'Kell',
    fullName: function() {
        console.log(`${this.firstName + ' ' + this.lastName}`);
    }
};
console.log(obj3.fullName()); //Darzy Kell

//ES6
let obj4 = {
    firstName: 'Darzy',
    lastName: 'Kell',
    fullName() {
        console.log(`${this.firstName + ' ' + this.lastName}`);
    }
};
console.log(obj4.fullName()); //Darzy Kell

//static methods
//set prototype of an created object(not Object)
//technically its better to put a method on a prototype aand then all new instances of the object will inherit that method
//and can be changed in one place
let objProto = {
    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }
};

let obj5 = {
    firstName: 'Big',
    lastName: 'D'
};
Object.setPrototypeOf(obj5, objProto);

console.log(obj5.fullName()); //Big D

//some JS frameworks provide for taking properties from multiple different objects and collating them into one new object
//Object.assign accomplishes this is Vanilla JS
let obj6 = {
    start: 0
};

let obj7 = {
    a: 2
};

let obj8 = {
    b: 4
};

let obj9 = {
    c: 8
};

//the first param is the object that existz that I want to add properties to - followed by the objects I want to add properties from
//NOTE: will not copy over properties that are not Enumerable(cant be counted etc. / set to false) &
//properties not owned by an object(ie properties owned by the prototype)
Object.assign(obj6, obj7, obj8, obj9);
console.log(obj6); //start: 0, a: 2, b: 4, c: 8