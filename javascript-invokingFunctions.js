let test = function(val) {
    // binds to window object in the browser
    console.log(this);
    //outputs val, even though one value is set, & more than one is passed in
    console.log(val);
    //arguments is an 'Arraylike' value attached to all functions
    console.log(arguments);
    //iterate arguments values like in an array -
    console.log(arguments[1]);
};

test(2, 4); // outputs 'val' is 2

//Not recommended to use arguments to determine what values are being passed into a function
// - for readability etc
//though can be useful for following example:

let sumIt = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
};

sumIt(1, 2, 3, 4); // logs 10