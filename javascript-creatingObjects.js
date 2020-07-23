// 2 methods for ceating Javascript objects - 
//Object literal - name /valur pairs
let obj = {
    firstName: "Darz",
    lastName: "K"
};
//Object Constructor - use new
let obj2 = new Object();
obj2.firstName = "Switch";
obj2.lastName = "Kell";

obj.greeting = function(a, b) {
        console.log('Sup');
        console.log(arguments); //[Arguments] {}
        console.log(this); //{ firstName: 'Darz', lastName: 'K', greeting: [Function] }
    }
    // console.log(obj.firstName); //Darz
obj.greeting(); //Sup

//use 'delete' keyword to remove properties from an object - dont use for variables
delete obj2.lastName;
console.log(obj2);

// use 'in' to return boolean if property exists on object
console.log('lastName' in obj2); //false

console.log('greeting' in obj); //true

// use 'hasOwnProperty' method in the same way
console.log(obj.hasOwnProperty('firstName')); //true