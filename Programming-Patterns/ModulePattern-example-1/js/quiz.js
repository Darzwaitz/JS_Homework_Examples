var UTIL = (function(u) {
    //Setup submodule
    var sub = u.quiz = u.quiz || {};

    //Dependencies
    var strU = u.string,
        domU = u.dom,
        $ = u.dom.$;

    var checkAnswer = function(value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = strU.breakOut(domU.data($('#q01'), 'answer'), ",");
                correct = ans.every(function(val) {
                    return (value.indexOf(val) > -1);
                });
                result = (correct) ? 'correct' : 'incorrect';
                displayFeedback(result);
            } else {
                displayFeedback('no-answer');
            }
        },
        initialize = function() {
            hideFeedback();
        },
        displayFeedback = function(result) {
            var feedback = $('.feedback.' + result);
            domU.addClass(feedback, 'visible');
        },
        hideFeedback = function() {
            //looks like a class of feedback & visible
            var feedback = $('.feedback.visible');
            domU.removeClass(feedback, 'visible');
        };

    //Public methods
    sub.checkAnswer = checkAnswer;
    sub.initialize = initialize;

    return u;

})(UTIL || {});