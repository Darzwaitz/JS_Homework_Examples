// let testObj = {
//     property: 'property',
//     nextproperty: 12
// }
// console.log(testObj);


// Object.defineProperty(testObj, 'property', {
//     enumerable: false,
// });
// let answer = testObj.propertyIsEnumerable("property");
// console.log(answer);



//console.log(answer);

// let obj1 = {
//     start: 1,
//     end: 100,
//     multiple: 'multiple'
// };

//IIFE work
let addNumbers = function(num1, num2) {
    return num1 + num2;

}(2, 2);


let multiplyReturnedTotal = function() {
    return addNumbers * addNumbers;


}();

(function() {
    console.log(multiplyReturnedTotal);
}());

//console.log('test');