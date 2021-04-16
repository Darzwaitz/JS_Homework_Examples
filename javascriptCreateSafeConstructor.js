//Pattern using an if statement to create safe constructors that prevent those constructorz being used incorrectly
//this avoids accidentally creating global variables
let Users = function (fName, lName) {
    if (this instanceof Users) {
        this.firstName = fName;
        this.lastName =lName;
    }else {
        return new Users(fName, lName);
    }
    this.firstName = fName;
    this.lastName = lName;
};

//new keyword not used here
let user1 = Users("test", "person");

let user2 = new Users("proper", "person");