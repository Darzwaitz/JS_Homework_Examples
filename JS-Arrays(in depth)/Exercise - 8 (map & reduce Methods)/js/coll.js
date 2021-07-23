let methods = ["map", "filter", "reduce", "reduceRight", "forEach", "every", "some"],
    divs = document.querySelectorAll('div'),
    nums = new Set([1, 2, 3, 4, 5]),
    all = new Map();

all.set(methods, "first");
all.set(divs, "second");
all.set(nums, "third");
all.set(all, "fourth");

let allArray = processData(methods, divs, nums, all);

let singleArray = allArray.reduce((acc, val) => [...acc, ...val], []);

console.log(singleArray);
// Array(19) [ "map", "filter", "reduce", "reduceRight", "forEach", "every", "some", div.title2, div.line, div#jslogo
// , … ]
// ​
// 0: "map"
// ​
// 1: "filter"
// ​
// 2: "reduce"
// ​
// 3: "reduceRight"
// ​
// 4: "forEach"
// ​
// 5: "every"
// ​
// 6: "some"
// ​
// 7: <div class="title2">​
// 8: <div class="line">​
// 9: <div id="jslogo">
// ​
// 10: 1
// ​
// 11: 2
// ​
// 12: 3
// ​
// 13: 4
// ​
// 14: 5
// ​
// 15: Array [ (7) […], "first" ]
// ​
// 16: Array [ NodeList(3), "second" ]
// ​
// 17: Array [ Set(5), "third" ]
// ​
// 18: Array [ Map(4), "fourth" ]
// ​
// length: 19