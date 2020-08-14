// the call and apply built in methods allow us to change the value of 'this'
// - we can invoke a function as if it where a method of some other Object- bind this to an object of our choice
// call and apply are nearly identical, only difference is how the arg is passed in -
// the apply method takes an array as the subsequent argument parameter
// in both cases the first arg is an object

// function.call(this, arg1, arg2);

// function.apply(this, [arg1, arg2]);

// let func = function.bind(this, arg1, arg2);  - Bind returns a new function

let user1 = {
    firstName: 'Darz',
    lastName: 'K',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

let user2 = {
    firstName: 'Tobar',
    lastName: 'E',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

let greeting = function(term) {
    console.log(term + " " + this.firstName);
};

let greeting2 = function(term, punct) {
    console.log(term + " " + this.firstName + punct);
};

greeting.call(user1, "Good mornin'"); //Good mornin' Darz

greeting.call(user2, "Good afternoon"); //Good afternoon Tobar

//
greeting2.call(user1, "Good mornin'", "!"); //Good mornin' Darz !

greeting2.call(user2, "Good afternoon", "!"); //Good afternoon Tobar !

//
greeting.apply(user1, ["Good mornin'"]); //Good mornin' Darz

greeting.apply(user2, ["Good afternoon"]); //Good afternoon Tobar

//
greeting2.apply(user1, ["Good mornin'", "!"]); //Good mornin' Darz !

greeting2.apply(user2, ["Good afternoon", "!"]); //Good afternoon Tobar !

// call method of another function, overiding this
console.log(user2.fullName.call(user1)); // Darz K

// call method of another function, overiding this
console.log(user2.fullName.apply(user1)); // Darz K

//Bind
let morningGreet = greeting2.bind(user1, "Good Morning");

let afternoonGreet = greeting2.bind(user1, "Good Afternoon");

//because I'm using greeting2 that passes in 2 args - we get the following result
//If used with greeting, it will still work, though would not have the extra arg included in the following invokationz
morningGreet("!"); //Good Morning Darz!

afternoonGreet("."); //Good Afternoon Darz.

let c1 = {
    x: 5,
    y: 10
}

let c2 = {
    x: 75,
    y: 500
}

function printCoords() {
    console.log(this.x + ", " + this.y);
}

//actually creates the new function and is assigned to the variable
let c1_func = printCoords.bind(c1);

let c2_func = printCoords.bind(c2);

c1_func(); //5, 10

c2_func(); //75, 500

//cannot overide Bind with call or apply


//Examples 2

//call
let add = function(c) {
    console.log('Answer ' + (this.a + this.b + c));

}

let obj = {
    a: 1,
    b: 2
}

add.call(obj, 3); //Answer 6
// using the resident arguments variables and the slice method from the prototype
let argsToArray = function() {
    console.log([].slice.call(arguments));
}

argsToArray(1, 2, 3); // [ 1, 2, 3 ]

//apply - in this example, taking advantage of apply to use the Math.min method to find the min in an array, which
//could not normally be done on an array with Math.min
let numArray = [1, 2, 3];

console.log('Answer array no. ' + (Math.min(numArray))); //Answer array no. NaN
//(no object passed in - null used)
console.log('Answer min no. ' + (Math.min.apply(null, numArray))); //Answer min no. 1