const usingSort = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    if (array1.sort().toString() !== array2.sort().toString()) {
        return false;
    }
    return true;
}

console.log(`Example 1 Result: ${usingSort([1, 3, 2, 1], [1, 2, 3, 3])}`); //Example 1: false

//Example 2

function checkUniqueItems(arrayOne, arrayTwo) {
    const dataObject = {
        one: {},
        two: {}
    };

    //create collection based on repeat
    for (let i = 0; i < arrayOne.length; i++) {
        let itemOne = arrayOne[i];
        let itemTwo = arrayTwo[i];

        dataObject['one'][itemOne] = dataObject['one'][itemOne] ? dataObject['two'][itemOne] + 1 : 1;

        dataObject['two'][itemTwo] = dataObject['two'][itemTwo] ? dataObject['two'][itemTwo] + 1 : 1;
    }
    //check same repeat by keys
    for (let key of Object.keys(dataObject.one)) {
        if (dataObject.one[key] !== dataObject.two[key]) {
            return false
        }
    }
    return true;
}

function checkArraysByRepeatedItems(arrayOne, arrayTwo) {
    //check length first
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
    //check if contains all items
    if (arrayOne.every((val) => { return arrayTwo.includes(val); }) &&
        checkUniqueItems(arrayOne, arrayTwo)) {
        return true;
    }
    return false;
}

let result2A = checkArraysByRepeatedItems([1, 3, 2, 1], [1, 2, 3, 3]);
console.log(`Example 2A Result: ${result2A}`);

let result2B = checkArraysByRepeatedItems([1, 3, 2, 3], [1, 2, 3, 3]);
console.log(`Example 2B Result: ${result2B}`);

//Example 3

const arrayHasSomeElements = function(arr1, arr2) {
    let getCount = function(arr, val) {
        return arr.reduce((count, curVal) => (curVal === val ? 1 : 0) + count, 0);
    };

    return arr1.length === arr2.length &&
        arr1.reduce((checks, val) => checks &&
            getCount(arr1, val) === getCount(arr2, val), true);
};

console.log('Example 3 Result: ' + arrayHasSomeElements([1, 3, 2, 3], [1, 2, 3, 3])); // Example 3 Result: true

// Example 4

//will return true when properties are not in order
const checkArrays = function(arrays1, arrays2) {
    if (arrays1.length !== arrays2.length) {
        return false;
    }
    //create clone of array
    let tmp = [...arrays2];

    //iterate each value - remove the matching element from tmp array and return true if present
    return arrays1.every(val => {
            if (tmp.includes(val)) {
                tmp.splice(tmp.indexOf(val), 1);
                return true;
            } else {
                return false;
            }
        }

    );
}

console.log('Example 4 Result: ' + checkArrays([3, 2, 3, 1], [1, 2, 3, 3])); // Example 4 Result: true