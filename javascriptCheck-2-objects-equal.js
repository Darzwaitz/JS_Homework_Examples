const obj1 = { name: 'Darz', age: '38', eyes: 'blue' },
    obj2 = { name: 'Darz', age: '38', eyes: 'blue' };

// check if objects have same data - return true or false
// 1st make sure same number of keys equal - 2nd use EVERY function
const hasSameDataObj = function(obj1, obj2) {
    // return array of keys using static Object function
    let obj1Keys = Object.keys(obj1);

    // arrow function, hasOwnProperty' method (of JS objects) used & 'every' method('some' is sister method, - 
    // - used in place of 'every' - to check if some of the variables are the same)
    // NB: 'hasOwnProperty' checks the object, not the prototype
    if (obj1Keys.length === Object.keys(obj2).length) {
        return obj1Keys.every(key => obj2.hasOwnProperty(key) &&
            obj2[key] === obj1[key]);
    };
    return false
};

console.log(hasSameDataObj(obj1, obj2));