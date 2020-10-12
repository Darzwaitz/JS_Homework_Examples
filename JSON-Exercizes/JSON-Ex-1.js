// JSON can be used to store a JavaScript object as text
// JSON methods: JSON.stringify(data) - JSON.parse(data) - connected to the JSON JS object
// Data is in name/value pairs separated by colon, with name/id always enclosed in double quotes
//comma to separate each name/value pair - curly braces hold objects - square brackets hold arrays

//JSON values must be one of these Data types:
// string(double quotes) - number - object - array - boolean - null (NB: cannot represent undefined)

let obj = {
    numquestions: 3,
    randomQuestions: true,
    questions: [{
            stem: "What are the 6 primitive types?",
            weight: 1,
            type: "fill-in",
            ans: "string, boolean, number, undefined, null, symbol"
        },
        {
            stem: "JavaScript is the same as Java",
            weight: 1,
            type: "true-false",
            ans: false
        },
        {
            stem: "Using var is the only way to declare variables",
            weight: 1,
            type: "true-false",
            ans: false
        }
    ]
};

//convert to JSON text
let jsonText = JSON.stringify(obj);
console.log(jsonText);
//logs
//  {"numquestions":3,"randomQuestions":true,"questions":[{"stem":"What are the 6 primitive types?","weight":1,"type":"fill-in","ans":"string, boolean, number, undefined, null, symbol"},{"stem":"JavaScript is the same as Java","weight":1,"type":"true-false","ans":false},{"stem":"Using var is the only way to declare variables","weight":1,"type":"true-false","ans":false}]}

//convert back to object
let jsonObject = JSON.parse(jsonText);
console.log(jsonObject);