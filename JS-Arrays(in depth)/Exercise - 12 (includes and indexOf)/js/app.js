/*
This array represents a series of pages in an online course. If the page has been viewed, it records a 1. If the page has not been viewed, it records a 0. Create a function that will check and see if there are any 0s in the array. If there is a 0, retrieve the index of the first 0 and return it; this is the page that will be shown to the user. If there are no zeros, return the index for the last element in the array (the last page).
*/

let stateInfo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
let stateInfo2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const getPagePosition = function (pages) {
    if (pages.includes(0)) {
        // get the position of the 1st zero
        return pages.indexOf(0);
    } else {
        // else get the last element
        return pages.length - 1;
    }
};
console.log(getPagePosition(stateInfo)); // 17
console.log(getPagePosition(stateInfo2)); // 20