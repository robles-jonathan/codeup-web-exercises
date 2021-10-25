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
        }else{
            return typeof input;
        }
    }

    console.log("Input is an empty string: \n" + typeCheck(''));
    console.log("Input isNaN(): \n" + typeCheck(isNaN()));
    console.log("Input is !false * 3: \n" + typeCheck(!false * 3));
    console.log("Input is 4 + '4': \n" + typeCheck(4 + '4'));


    console.log("Morning Warmup \"FizzBuzz\"");
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else {
            console.log(i);
        }
    }

    //Warmup: Create a function named secondToLast that accepts an array as an argument and will return the second to last element of the array.

    function secondToLast(array) {
        return array[array.length-2]
    }

    console.log(secondToLast(["first", "second", "second to last", "last"]))
})();

// WARM-UP October 21, 2021

//Write a function named ‘moveToEnd’ that takes in an array, and returns the array with the original first index moved to the last index of the array.
//
// Example:
// moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
// moveToEnd([‘roll’, ‘rock’, ‘and’]  // returns [‘rock’, ‘and’, ‘roll’];
function moveToEnd(array){
    var removedElement = array.shift();
    array.push(removedElement);
    console.log(array);
    return array;
}
moveToEnd([1,2,3,4]);
moveToEnd(["rock","and","roll"]);


var slowbro = {
    pokedexNumber: 79,
    name: "Slowbro",
    height: {
        feet: 5,
        inches: 3
    },
    weight: 173.1,
    description: "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.",
    category: "Hermit Crab",
    abilities: ["Oblivious", "Own Tempo"],
    type:["Water", "Psychic"],
    weaknesses: ["Ghost", "Dark", "Grass", "Electric", "Bug"]
}
console.log(slowbro);

