//console.log('file is working');

// let obj1 = new Object;
// obj1.name = 'test2';

// console.log(obj1.name);
//console.log(typeof('1' + 5));

//Prototype
let objProto = {
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

let user1 = Object.create(objProto);
user1.firstName = 'Darz';
user1.lastName = 'Kelly';

let user2 = Object.create(objProto);
user2.firstName = 'Ciarz';
user2.lastName = 'Kelly';

//console.log(user1);
console.log(`${user1.fullName()} & ${user2.fullName()}`);