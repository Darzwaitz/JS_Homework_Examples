const UTIL = (function (s) {
  //Set up sub Module
  const sub = (s.string = s.string || {});

  /*
    String Functionality
    */
  const numChar = function (str, char) {
      //return (str.match(new RegExp(char, 'g')) || []).length;
      return str.split(char).length - 1;
    },
    breakOut = function (str, delim) {
      const arr = str.split(delim);
      return arr.map(function (val) {
        return val.trim();
      });
    };

  //Public Methods
  sub.numChar = numChar;
  sub.breakOut = breakOut;

  return s;
})(UTIL || {});
