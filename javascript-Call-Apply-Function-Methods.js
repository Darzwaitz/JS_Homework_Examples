// the call and apply built in methods allow us to change the value of 'this'
// - we can invoke a function as if it where a method of some other Object- bind this to an object of our choice
// call and apply are nearly identical, only difference is how the arg is passed in -
// the apply method takes an array as the subsequent argument parameter
// in both cases the first arg is an object

// function.call(this, arg1, arg2);

// function.apply(this, [arg1, arg2]);

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