// localStorage doesn't expire - scoped to docs origin 
//(http to https wont work - domain and port also need to be the same)
//NB: Information needs to be stored as string

// // Returns values in localStorage on a website as JSON string
// for (let key in localStorage) {
//     console.log(key);
//     console.log(localStorage[key]);
// }

//SETTING
// An object passed to localStorage will get stored as string
let start = new Date();
let obj = {
    userName: 'DarzK',
    date: start
};
// If this method is used, it will get stored as iterable object
localStorage.setItem("connectInfo", JSON.stringify(obj));

//GETTING
// Object is parsed from string and output is object
let obj = JSON.parse(localStorage.getItem("connectInfo"))
console.dir(obj);

// //Returns
// {…}​
// date: "2020-06-19T10:56:56.109Z"​  NB: this date stored as string
// userName: "DarzK"

//REMOVING
localStorage.removeItem("connectInfo");

//Or remove all items
localStorage.clear();