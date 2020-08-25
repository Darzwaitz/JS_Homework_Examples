//chaining existing methoda and setting up my own chaining pattern

let str = 'This is a test string in the year 2020. ';

//replace()s 1st param is the existing data to be targeted, subsequent param is what will replace it
let str1 = str.replace('2020', '2020, the year of the spectacle').toUpperCase().trim();

console.log(str1); // THIS IS A TEST STRING IN THE YEAR 2020, THE YEAR OF THE SPECTACLE.

//array example
let fruit = ['apple', 'pear', 'peach'];

let fruitStr = fruit.concat('orange', 'kiwi').sort().join(' - '); //join returns string, so we couldnt add on another array method
let fruitStrUpCase = fruit.concat('orange', 'kiwi').sort().join(' - ').toUpperCase(); //we can add another string method - obviously.

console.log(fruitStr); //apple - kiwi - orange - peach - pear
console.log(fruitStrUpCase); //APPLE - KIWI - ORANGE - PEACH - PEAR

//'return this' in objects to use method chaining on self created methods, so the object is passed for each part of the chain
let student = {
    fName: 'D',
    lName: 'Man',
    score: [],
    total: 0,
    average: 0,
    addScore: function(val) {
        this.score.push(val);
    },
    doTotal: function() {
        this.total = this.score.reduce(function(x, y) {
            return x + y;
        }, 0);
    },
    doAverage: function() {
        this.average = this.total / this.score.length;
    }
};

student.addScore(100);
student.addScore(80);
student.addScore(95);
student.doTotal();
student.doAverage();

//get all the values
for (let prop in student) {
    console.log("Name: " + prop);
    //bracket syntax similar to array - used on objects in this way
    console.log("Value of property: " + student[prop]);
}
// Name: fName
// Value of property: D
// Name: lName
// Value of property: Man
// Name: score
// Value of property: 100,80,95
// Name: total
// Value of property: 275
// Name: average
// Value of property: 91.66666666666667
// Name: addScore
// Value of property: function(val) {
//         this.score.push(val);
//     }
// Name: doTotal
// Value of property: function() {
//         this.total = this.score.reduce(function(x, y) {
//             return x + y;
//         }, 0);
//     }
// Name: doAverage
// Value of property: function() {
//         this.average = this.total / this.score.length;
//     }

//this chain will throw an error - 'TypeError: Cannot read property 'addScore' of undefined'
//student.addScore(100).addScore(80).addScore(95).doTotal().doAverage();

//with chaining we need to add return this
//'return this' in objects to use method chaining on self created methods, so the object is passed for each part of the chain
let student2 = {
    fName: 'D',
    lName: 'Man',
    score: [],
    total: 0,
    average: 0,
    addScore: function(val) {
        this.score.push(val);
        //this fixes the issue
        return this;
    },
    doTotal: function() {
        this.total = this.score.reduce(function(x, y) {
            return x + y;
        }, 0);
        //this fixes the issue
        return this;
    },
    doAverage: function() {
        this.average = this.total / this.score.length;
        //this fixes the issue
        return this;
    }
};

//this needs to be viewed in the console - not in node
console.log('student 2 ' + student2.addScore(100).addScore(80).addScore(95).doTotal().doAverage());
// {fName: "D", lName: "Man", score: Array(3), total: 275, average: 91.66666666666667, …}
// addScore: ƒ (val)
// average: 91.66666666666667
// doAverage: ƒ ()
// doTotal: ƒ ()
// arguments: null
// caller: null
// length: 0
// name: "doTotal"
// prototype: {constructor: ƒ}
// __proto__: ƒ ()
// [[FunctionLocation]]: VM933:92
// [[Scopes]]: Scopes[2]
// fName: "D"
// lName: "Man"
// score: (3) [100, 80, 95]
// total: 275
// __proto__: Object


//useful finding properties on the object iterations
for (let prop in student) {
    console.log("Name: " + prop);
    //bracket syntax similar to array - used on objects in this way
    console.log("Type of property: " + typeof(student[prop]));
}
// Name: fName
// Type of property: string
// Name: lName
// Type of property: string
// Name: score
// Type of property: object
// Name: total
// Type of property: number
// Name: average
// Type of property: number
// Name: addScore
// Type of property: function
// Name: doTotal
// Type of property: function
// Name: doAverage
// Type of property: function

//array of properties
let properties = Object.keys(student);
console.log(properties);
// 'fName',   'lName',
//   'score',   'total',
//   'average', 'addScore',
//   'doTotal', 'doAverage'