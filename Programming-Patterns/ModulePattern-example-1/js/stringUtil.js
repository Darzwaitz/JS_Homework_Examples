var UTIL = (function(s) {

    //Set up sub module
    var sub = s.string = s.string || {};
    /*
    String functionality
    */

    var numChar = function(str, char) {
            return (str.split(char).length - 1);
        },

        breakOut = function(str, delim) {
            var arr = str.split(delim);
            return arr.map(function(val) {
                return val.trim();
            });
        };
    /* PUBLIC METHODS and PROPERTIES */
    sub.numChar = numChar;
    sub.breakOut = breakOut;

    return s;

})(UTIL || {});