function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}

// console.log(validateEmail("john@gmail.com"));
// console.log(validateEmail("john@gmail"));

module.exports = validateEmail;
