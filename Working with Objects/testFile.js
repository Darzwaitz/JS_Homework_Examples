let testObj = {
    property: 'property',
    nextproperty: 12
}
console.log(testObj);


Object.defineProperty(testObj, 'property', {
    enumerable: false,
});
let answer = testObj.propertyIsEnumerable("property");
console.log(answer);



//console.log(answer);

// let obj1 = {
//     start: 1,
//     end: 100,
//     multiple: 'multiple'
// };