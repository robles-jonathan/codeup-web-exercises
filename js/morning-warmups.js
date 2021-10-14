"use strict";
(function(){
    // WARM-UP FOR  10-13-21
// Write a function that returns the number 7.
    function returnSeven(){
        return 7;
    }
    console.log(returnSeven());

// Write an if statement with a condition set to the boolean false.
// Does it run?

    if (true){
        console.log("Am I seen?");
    }


    // WARM-UP FOR 10-14-21
    var hadBreakfast = Boolean(Math.round(Math.random()));
    var hadBreakfastMessage = (hadBreakfast) ? "Yes, I had breakfast!" : "No, I did not have breakfast.";
    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);

})();
