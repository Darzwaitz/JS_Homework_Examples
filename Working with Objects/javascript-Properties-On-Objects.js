//difference between 'in' and 'hasOwnProperty' is that hasOwnProperty doesnt iterate/check on the prototype chain

var person1 = {
    firstName: "Darz",
    lastName: "Kelly",
    email: "test@javascripthomework.com",
    type: "admin",
    active: true,
    address: {
        street: "321 Kay park",
        zip: 10001
    }
};

//for in loop iterates objects
for (let prop in person1) {
    console.log("Name: " + prop);
    //bracket syntax similar to array - used on objects in this way
    console.log("Value: " + person1[prop]);
}
// logs:

// Name: firstName
// Value: Darz
// Name: lastName
// Value: Kelly
// Name: email
// Value: test@javascripthomework.com
// Name: type
// Value: admin
// Name: active
// Value: true
// Name: address
// Value: [object Object]

//the keys keyword grabs the properties of an object, and returns as an array
let properties = Object.keys(person1);
console.log(properties); //[ 'firstName', 'lastName', 'email', 'type', 'active', 'address' ]