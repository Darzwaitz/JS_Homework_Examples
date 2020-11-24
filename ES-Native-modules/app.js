import { yellName, formatName} from './utilities.js'
console.log('This is app.js.');

// *if using the export default method
// import canBeANewName from './utilities';

let name = formatName('K, Darz');

console.log(yellName(name));
// logs
// This is app.js.
// DARZ K!

// *if using the export default method
// console.log(canBeANewName('Darz K'));