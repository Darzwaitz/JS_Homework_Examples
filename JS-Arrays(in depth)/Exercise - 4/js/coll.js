let methods = ["map", "filter", "reduce", "reduceRight", "forEach", "every", "some"],
    divs = document.querySelectorAll('div'),
    nums = new Set([1, 2, 3, 4, 5]),
    all = new Map();

all.set(methods, "first");
all.set(divs, "second");
all.set(nums, "third");
all.set(all, "fourth");

let allArray = processData(methods, divs, nums, all);

console.log(allArray);
// Array(4) [ (7) […], (3) […], (5) […], (4) […] ]
// ​
// 0: Array(7) [ "map", "filter", "reduce", … ]
// ​
// 1: Array(3) [ div.title2, div.line, div#jslogo
//  ]
// ​
// 2: Array(5) [ 1, 2, 3, … ]
// ​
// 3: Array(4) [ (2) […], (2) […], (2) […], … ]
// ​
// length: 4