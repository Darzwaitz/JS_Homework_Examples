//asychronous actions with callbacks
//Callback - a function thats is invoked or called after another event occurs

// let logCall = function() {
//     console.log('logCall was called');
// };
//the function is usually created in the callback as followz,
//as opposed to calling the function already created - just by modern convention
// setTimeout(function() {
//     console.log('logCall called BACK');
// }, 2000);

// let btn = document.querySelector('#item1');

// btn.addEventListener('click', function(e) {
//     console.log('the button was clicked');

// });

let studentz = [
    { name: 'Mary', score: 90, school: 'East' },
    { name: 'Jamez', score: 100, school: "East" },
    { name: "Steve", score: 40, school: "East" },
    { name: "Gabe", score: 90, school: "West" },
    { name: "Rachel", score: 85, school: "East" },
    { name: "Rochelle", score: 95, school: "West" },
    { name: "Lynette", score: 75, school: "East" }
];

//this structure is used for scalability
//creating our own callback also here
let processStudentz = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
};

//obj parameter passed in to anonymous callback function as data[i] from processStudentz function
//benefit of this structure - we can easily update parameters EG: the number 60 here
processStudentz(studentz, function(obj) {
    if (obj.score > 60) {
        console.log(obj.name + ' Passed');
    }
});

let determineTotal = function() {
    let total = 0,
        count = 0;

    processStudentz(studentz, function(obj) {
        total = total + obj.score;
        count++;
    });
    console.log(`Total score: ${total} - Total Count: ${count}`);
};

determineTotal();