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

    // WARM-UP FOR 10-15-21
    // Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"
    //
    // Tests:
    //     typeCheck('')
    // typeCheck(isNaN());
    // typeCheck(!false * 3);
    // typeCheck(4 + '4');

    function typeCheck(input) {
        if (typeof input === 'string'){
            return "Haha, it's a string of string!";
        }
    }

    console.log(typeCheck(isNaN()));
    console.log(typeCheck(!false * 3));
    console.log(typeCheck(4 + '4'));

})();
