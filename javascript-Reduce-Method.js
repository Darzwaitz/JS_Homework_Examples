//tutorial : the magic of the reduce array method
//reduce is a method for arrays
const scores = [90, 30, 20, 75, 85, 95, 0, 55, 60, 40];

//callback func added/passed in to reduce method - accumulator is initially set to 0
//on first iteration it will be set to 90 - added to 2nd array value(30) - then that
//added value is accumulator and so on
let total = scores.reduce((accumulator, element) => accumulator + element, 0);

console.log('Ex 1: ' + total); //550

//Example 2

//get the min and max score from the scores array - callback func passed in that returns the values
let minMax = scores.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);

//returns an array
console.log('Ex2: ' + minMax); //Ex2: 0,95

//Example 3

const students = [{
        userid: 'steveo',
        name: 'Steven',
        passFail: true
    },
    {
        userid: 'debbo',
        name: 'Debbie',
        passFail: true
    },
    {
        userid: 'johnyc',
        name: 'Johny',
        passFail: false
    }
];

//return userid as a property with entire object as itz value
let studentObj = students.reduce(function(acc, person) {
    return {...acc, [person.userid]: person }
}, {});

console.log(studentObj);
// {
//     steveo: { userid: 'steveo', name: 'Steven', passFail: true },
//     debbo: { userid: 'debbo', name: 'Debbie', passFail: true },
//     johnyc: { userid: 'johnyc', name: 'Johny', passFail: false }
//   }

console.log(studentObj.johnyc.name); //Johny