//run on an external page that included with this upload
// document.addEventListener("DOMContentLoaded", function() {

//     let logo = document.querySelector('#logo');

//     logo.addEventListener("click", function() {
//         console.log("Clicked");
//     });
// });

var firstName = "James",
    lastName = "West";

var user1 = {
    firstName: "Cory",
    lastName: "Sikehema",
};

var user2 = {
    firstName: "Hailey",
    lastName: "Smith"
};

var fullName = function() {
    console.log(this.firstName + " " + this.lastName);
};

fullName(); // James West
//running this in node returns 'undefined undefined' and using let in browser console has the same result
//var works in the console

//these work in node - so issue is with global namespace
fullName.call(user1); //Cory Sikehema

fullName.call(user2); //Hailey Smith