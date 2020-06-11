// vanila JS formatting numbers without library - NB: numbers displayed as string
const num = 1234567.89;
const currency = 7654321.23;
const score = 0.88

// //built in js method - outputs '1,234,567.89'
// console.log(num.toLocaleString());

// //built in js method - can pass country code - outputs '1,234,567.89'
// console.log(num.toLocaleString('en-IN'));

// // EX.1 built in js object - Int.NumberFormat - can pass style in as an object - outputs '$7,654,321.23'
// //since it's an object, need to create an instance of that object
// const usCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
// console.log(usCurrency.format(currency));

// // Ex.2 built in js object - Int.NumberFormat - can pass style in as an object - outputs '€7,654,321.23'
// //since it's an object, need to create an instance of that object
// const germanEuro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
// console.log(germanEuro.format(currency));

// // Ex.3 built in js object - Int.NumberFormat - can pass style in as an object - outputs '¥7,654,321'
// //since it's an object, need to create an instance of that object
// const japanYen = new Intl.NumberFormat('js-JP', { style: 'currency', currency: 'JPY' });
// console.log(japanYen.format(currency));

// Ex.4 built in js object - Int.NumberFormat - can pass PERCENT style in as an object - outputs '88%'
//since it's an object, need to create an instance of that object
const percent = new Intl.NumberFormat('en-US', { style: 'percent' });
console.log(percent.format(score));