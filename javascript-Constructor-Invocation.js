// function declaration used instead of expression when creating a
// constructor - no need to designate that the function is first class -
// not planned to be passed around

// Use uppercase letter at beginning of constructor to show it is such -
// and to avoid it being called as a function without the 'new' keyword- if new is not used
// this will be set to the global window object

// function Greeting() {
//     console.log(this);

// }

// Greeting(); // this is the Window object

// new Greeting(); // the new keyword on the constructor changes this to be bound to this new object
// // purpose of constructors is to create similar objects

function Users(fName, lName) {
    // puts property onto this objects, and sets it to the value passed in
    this.firstName = fName;
    this.lastName = lName;
    //the following method would usually be placed on the prototype - not on this constructor
    this.fullName = function() {
        return (`${this.firstName} ${this.lastName}`);

    };

}

let user1 = new Users('Darz', 'Kelly');
console.log(user1.firstName, user1.lastName, user1.fullName()); //Darz Kelly Darz Kelly

let user2 = new Users('Kerz', 'Kelly');
console.log(user2.firstName); //Kerz