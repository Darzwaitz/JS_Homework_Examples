// Solution 1
function areAllCharactersUnique(str) {
  const strSet = new Set(str).size;
  if (strSet === str.length) return true;
  return false;
}

module.exports = areAllCharactersUnique;
