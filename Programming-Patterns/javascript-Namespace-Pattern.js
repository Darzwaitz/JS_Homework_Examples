//if MYAPP already exists in the global namespace - to avoid potential collison with
//a library - my code is added to it - if its undefined, we use the blank object thats initialized here

var MYAPP = MYAPP || {};

(function(namespace) {

    let prompt = "Welcome,",
        prompt2 = "How are you?",
        prompt3 = "Good to see you again.",
        counter = 0,
        users = [];

    namespace.greeting = function(user) {
        let greeting = prompt + " ";
        if (newUser(user)) {
            greeting += prompt2;
        } else {
            greeting += prompt3;
        }
        console.log(greeting);
        counter++;
    };

    let newUser = function(user) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].toUpperCase() === user.toUpperCase()) {
                return false;
            }
        }
        namespace.addUser(user);
        return true;
    };

    namespace.addUser = function(user) {
        users.push(users);
    };
    namespace.numberOfGreetings = function() {
        console.log("Total number of greetingz: " + counter);

    };

})(MYAPP);


//console.log(greeting('Darz'));
console.log(MYAPP.greeting('Darz')); //Welcome, How are you?