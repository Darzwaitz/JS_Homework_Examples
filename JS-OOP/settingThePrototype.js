// different methods of setting the prototype, and using inheritance
// - default prototype is the 'Object'
// - use a Constructor function
// - Object.create(prototype)
// - ES6 - Object.setPrototypeOf(obj,prototype) (use judiciously)
// - ES6 - Class Structure - Uses the prototype in a very similar way Classes are used

let objProto = {
    greet : function(){
        console.log(this.greeting + " World");
    }
};

//Constructor function - Uppercase at start of name
//term is assigned to the greeting property of the Object that is created
let Greeting = function(term){
    this.greeting = term;
};

// assign prototype Object to the prototype property of the Constructor function
Greeting.prototype = objProto;

//now any object created from the constructor will have objProto as its prototype
let obj1a = new Greeting('Hi');
// console.log(obj1a.greet()); //Hi World

let obj1b = new Greeting('hi');
// console.log(obj1b.greet()); //hi World

//Object.create - prototype is set up as the object is set up
let obj2 = Object.create(objProto);
obj2.greeting = 'Hello';
// console.log(obj2.greet()); //Hello World


let obj3 = {
    greeting : 'Hiya'
}
// console.log(obj3.greeting);
// console.log(obj3);


//change prototype of an  object - object to be changed passed in first, then the prototype
Object.setPrototypeOf(obj3, objProto);
obj3.greet(); //Hiya World