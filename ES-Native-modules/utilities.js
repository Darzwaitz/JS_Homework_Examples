
const punct = '!';

// regex revereses last name and firstname
const formatName = function(name) {
  return name.replace(/(\w+), (\w+)/, '$2 $1');
};

const upperCaseName = function(name) {
  return name.toUpperCase();
};

const yellName = function(name) {
  return upperCaseName(name) + punct;
};

// exported functions are available in imported files
export { yellName, formatName};

// - can also be done this way, though the exported function should be
// - a function declaration and not an expression
// export default function yellName(name){
//   return upperCaseName(name) + punct;
// }